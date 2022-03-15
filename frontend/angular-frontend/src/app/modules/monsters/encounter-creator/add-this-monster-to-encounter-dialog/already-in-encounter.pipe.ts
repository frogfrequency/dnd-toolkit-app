import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alreadyInEncounter'
})
export class AlreadyInEncounterPipe implements PipeTransform {

  transform(encounter: any, name: string): boolean {
    console.log('called HERE')
    let result = encounter.monsters.find((element:any) => element.name == name)
    console.log('\t\t\t' + result)
    return !!result
  }

}
