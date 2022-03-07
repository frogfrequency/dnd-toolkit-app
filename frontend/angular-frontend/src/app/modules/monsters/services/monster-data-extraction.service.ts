import { JsonpClientBackend } from '@angular/common/http';
import { outputAst } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { IExperienceTable } from 'src/app/interfaces/IExperienceTable';
import { IMonster, ISpeed } from 'src/app/interfaces/IMonster';
import { experienceTable } from '../assets/challengeRatingXPTable';



@Injectable({
  providedIn: 'root'
})
export class MonsterDataExtractionService {

  constructor() { }

  extractSpeed(speedRaw: any): string { // input should of type ISpeed... but it's a bit tricky to make accessing the props work
    const modesOfMovement: string[] = ['Burrow', 'Climb', 'Fly', 'Swim', 'Walk']
    let speedString = ''

    modesOfMovement.forEach(mode => {
      if (speedRaw.hasOwnProperty(mode.toLowerCase())) {
        let newMode: string = `${mode}: ${speedRaw[mode.toLowerCase()]}ft, `
        speedString += newMode;
      }
    })
    if (speedRaw.hasOwnProperty('hover')) { // adding hover at the end if present
      speedString += 'Hover, '
    }
    if (speedString.charAt(speedString.length - 2) === ',') { // removing comma at the end
      speedString = speedString.slice(0, speedString.length - 2)
    }
    return speedString
  }

  extractAbilityScores(monster: any) {
    let abilityNames = ['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma'];
    let output: string[][] = []
    abilityNames.forEach(ability => {
      if (monster[ability]) {

        let modifier = Math.floor((monster[ability] - 10) / 2);
        let modifierString = JSON.stringify(modifier);
        if (0 <= modifier) {
          modifierString = '+' + modifier;
        }

        let savingThrowModifier: number | null = monster[ability + '_save'];
        if (!savingThrowModifier) {
          savingThrowModifier = modifier;
        }

        let savingThrowModifierString: string;

        if (0 <= savingThrowModifier) {
          savingThrowModifierString = '+' + JSON.stringify(savingThrowModifier)
        } else {
          savingThrowModifierString = '-' + JSON.stringify(savingThrowModifier)
        }

        output.push([ability.slice(0, 3).toUpperCase(), JSON.stringify(monster[ability]), modifierString, savingThrowModifierString]);
      }
    })
    return output
  }

  extractSkills(skills: any) {

    const allSkills: string[] = [
      'Athletics',
      'Acrobatics',
      'Stealth',
      'Arcana',
      'History',
      'Investigation',
      'Nature',
      'Religion',
      'Insight',
      'Medicine',
      'Perception',
      'Survival',
      'Deception',
      'Intimidation',
      'Performance',
      'Persuasion',
    ]
    let skillsString: string = '';

    allSkills.forEach(skill => {
      if (skills.hasOwnProperty(skill.toLowerCase())) {
        let skillValue = skills[skill.toLowerCase()];
        let newSkill: string;
        if (0 <= skillValue) {
          newSkill = `${skill}: +${skills[skill.toLowerCase()]}, `
        } else {
          newSkill = `${skill}: -${skills[skill.toLowerCase()]}, `
        }
        skillsString += newSkill;
      }
    })

    if (skillsString.charAt(skillsString.length - 2) === ',') { // removing comma at the end
      skillsString = skillsString.slice(0, skillsString.length - 2)
    }
    return skillsString
  }

  extractChallengeRating(monster: any) {
    let xpTable: IExperienceTable = experienceTable;
    let challengeRating: string = monster.challenge_rating;
    let xpString = JSON.stringify(xpTable[challengeRating]);
    for (let i = xpString.length - 3; 0 < i; i = i - 3) {
      xpString = xpString.slice(0, i) + `'` + xpString.slice(i);
      // xpString = xpString + 'x'
    }
    return `${challengeRating} (${xpString} XP)`
  }

  extractNameDescPairs(pairObject: any) {
    if (pairObject === "") {
      return []
    }
    let outputArr: string[][] = []
    pairObject.forEach( (element:any) => {
      let pair = [element.name, element.desc]
      outputArr.push(pair);
    })
    return outputArr
  }
}
