import { Pool, PoolClient, QueryResult } from "pg";


const pool: Pool = new Pool();

export const db = {
    query: async (text: string, params: any[] = []): Promise<QueryResult<any>> => {
        const start: number = Date.now();

        const dbResult: QueryResult<any> = await pool.query(text, params);

        const duration: number = Date.now() - start;
        console.log('executed query', { text, duration: `${duration}ms`, rows: dbResult.rowCount });

        return dbResult;
    },
    getClient: async (): Promise<PoolClient> => {
        const client: PoolClient = await pool.connect();
        const query = client.query;
        const release = client.release;

        // set a timeout of 5 seconds, after which we will log this client's last query
        const timeout = setTimeout(() => {
            console.error('A client has been checked out for more than 5 seconds!');
            console.error(`The last executed query on this client was: ${(client as any).lastQuery}`);
        }, 5000);

        // monkey patch the query method to keep track of the last query executed
        client.query = (...args: any): any => {
            (client as any).lastQuery = args;
            return query.apply(client, args);
        };

        client.release = () => {
            // clear our timeout
            clearTimeout(timeout);

            // set the methods back to their old un-monkey-patched version
            client.query = query;
            client.release = release;
            return release.apply(client);
        };

        return client;
    }
}