import { QueryResult } from "pg";
import { db } from "../db"
import { IPlayerCharacter } from "../interfaces/models/IPlayerCharacter";


export const fetchAllPlayerCharacters = async (): Promise<IPlayerCharacter[]> => {
    const dbResult: QueryResult<IPlayerCharacter> = await db.query('SELECT * FROM player_characters');
    return dbResult.rows;
}

export const createPlayerCharacter = async (playerCharacter: IPlayerCharacter): Promise<IPlayerCharacter> => {
    const insertQuery: string = `INSERT INTO player_characters (character_name, race, character_classes, character_level)
                                VALUES (
                                    '${playerCharacter.name}',
                                    '${playerCharacter.race}',
                                    '{"${playerCharacter.characterClasses}"}',
                                    '${playerCharacter.level}'
                                )
                                RETURNING *`;
    const dbResult: QueryResult<IPlayerCharacter> = await db.query(insertQuery);
    return dbResult.rows[0];
}