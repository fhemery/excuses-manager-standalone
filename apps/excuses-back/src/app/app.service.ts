import { Injectable } from '@nestjs/common';
import { Excuse } from './model/excuse';

@Injectable()
export class AppService {
  private static AllExcuses: Excuse[] = [
    {
      id: 1,
      excuse: `Je ne pouvais pas, j'avais aqua-poney`,
      category: 'sport',
    },
    {
      id: 2,
      excuse: `J'allais partir, mais mon vélo était crevé`,
      category: 'déplacement',
    },
    {
      id: 3,
      excuse: `Mon réveil n'a pas sonné`,
      category: 'réveil',
    },
    {
      id: 4,
      excuse: `Mon téléphone s'est mis à jour pendant la nuit, du coup le réveil ne marchait plus`,
      category: 'réveil',
    },
    {
      id: 5,
      excuse: `Mais je jure que j'avais cliqué`,
      category: 'informatique',
    },
    {
      id: 6,
      excuse: `Comment ça ? C'était pas lundi prochain ?`,
      category: 'calendrier',
    },
    {
      id: 7,
      excuse: `Je n'ai pas oublié. J'avais juste plus important à faire`,
      category: 'franchise',
    },
    {
      id: 8,
      excuse: `Je l'avais fait mais mon chien a mangé ma copie`,
      category: 'école',
    },
    {
      id: 9,
      excuse: `J'avais corrigé les copies, mais on m'a volé ma malette sur le chemin de l'école`,
      category: 'école',
    },
    {
      id: 10,
      excuse: `Il pleuvait, et j'avais que les tong de sorties`,
      category: 'bidon',
    },
    {
      id: 11,
      excuse: `Je n'ai jamais reçu cet email. Il est peut-être parti dans mes spams`,
      category: 'informatique',
    },
    {
      id: 12,
      excuse: `Mon agenda ne m'a pas fait de rappel`,
      category: 'informatique',
    },
  ];

  getExcuses(nb: number): Excuse[] {
    shuffleArray(AppService.AllExcuses);
    return AppService.AllExcuses.slice(0, nb);
  }
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}
