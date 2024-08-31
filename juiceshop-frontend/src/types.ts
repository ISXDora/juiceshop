import wattermImage from './assets/watterm-transparent.png';
import papayaImage from './assets/papaya-transparent.png';
import morangoImage from './assets/morango-transparente.png';
import morangoAltImage from './assets/morango-transparent.png';
import tropicalBlastImage from './assets/fundo-transparente-tropical-blast.png';
import cocoImage from './assets/fundo-transparente-coco.png';
import coolImage from './assets/cool-transparent.png';
import berryExplosionImage from './assets/berry-explosion-transparent.png';
import abacaxiImage from './assets/abacaxi-transparente.png';
import mangoImage from './assets/mango-transparent.png';


export interface Juice {
  id: string;
  title: string;
  image: string;
  price: number;
  amount: number;
  pickupDate?: string;
  ice?: boolean;
  sugar?: boolean;
}

export interface Stock {
  id: number;
  amount: number;
}

export enum JuiceFlavors {
  TROPICAL_BLAST = 'TROPICAL_BLAST',
  CITRUS_SPLASH = 'CITRUS_SPLASH',
  BERRY_EXPLOSION = 'BERRY_EXPLOSION',
  MANGO_MADNESS = 'MANGO_MADNESS',
  PINEAPPLE_PARADISE = 'PINEAPPLE_PARADISE',
  WATERMELON_WAVE = 'WATERMELON_WAVE',
  STRAWBERRY_SUNSHINE = 'STRAWBERRY_SUNSHINE',
  ORANGE_OASIS = 'ORANGE_OASIS',
  GREEN_GLOW = 'GREEN_GLOW',
  SUNSET_SIP = 'SUNSET_SIP',
  PEACHY_PUNCH = 'PEACHY_PUNCH',
  GRAPE_GALAXY = 'GRAPE_GALAXY',
  LEMON_LIFT = 'LEMON_LIFT',
  COOL_CUCUMBER = 'COOL_CUCUMBER',
  BANANA_BREEZE = 'BANANA_BREEZE',
  KIWI_KICK = 'KIWI_KICK',
  BLUEBERRY_BOUNCE = 'BLUEBERRY_BOUNCE',
  PAPAYA_PARTY = 'PAPAYA_PARTY',
  RASPBERRY_RUSH = 'RASPBERRY_RUSH',
  COCONUT_CRAZE = 'COCONUT_CRAZE',
}

export const juiceImageMap = {
  [JuiceFlavors.WATERMELON_WAVE]: wattermImage,
  [JuiceFlavors.PAPAYA_PARTY]: papayaImage,
  [JuiceFlavors.STRAWBERRY_SUNSHINE]: morangoImage,
  [JuiceFlavors.TROPICAL_BLAST]: tropicalBlastImage,
  [JuiceFlavors.COCONUT_CRAZE]: cocoImage,
  [JuiceFlavors.COOL_CUCUMBER]: coolImage,
  [JuiceFlavors.BERRY_EXPLOSION]: berryExplosionImage,
  [JuiceFlavors.PINEAPPLE_PARADISE]: abacaxiImage,
  [JuiceFlavors.SUNSET_SIP]: mangoImage,
  [JuiceFlavors.MANGO_MADNESS]: mangoImage,
  [JuiceFlavors.ORANGE_OASIS]: tropicalBlastImage,
  [JuiceFlavors.GREEN_GLOW]: coolImage,
  [JuiceFlavors.PEACHY_PUNCH]: mangoImage,
  [JuiceFlavors.GRAPE_GALAXY]: berryExplosionImage,
  [JuiceFlavors.LEMON_LIFT]: coolImage,
  [JuiceFlavors.BANANA_BREEZE]: mangoImage,
  [JuiceFlavors.KIWI_KICK]: coolImage,
  [JuiceFlavors.BLUEBERRY_BOUNCE]: berryExplosionImage,
  [JuiceFlavors.RASPBERRY_RUSH]: morangoAltImage,
};

export const JuiceFlavorTitles: Record<JuiceFlavors, string> = {
  [JuiceFlavors.TROPICAL_BLAST]: 'Explosão Tropical',
  [JuiceFlavors.CITRUS_SPLASH]: 'Splash de Cítricos',
  [JuiceFlavors.BERRY_EXPLOSION]: 'Explosão de Frutas Vermelhas',
  [JuiceFlavors.MANGO_MADNESS]: 'Loucura de Manga',
  [JuiceFlavors.PINEAPPLE_PARADISE]: 'Paraíso do Abacaxi',
  [JuiceFlavors.WATERMELON_WAVE]: 'Onda de Melancia',
  [JuiceFlavors.STRAWBERRY_SUNSHINE]: 'Brilho de Morango',
  [JuiceFlavors.ORANGE_OASIS]: 'Oásis de Laranja',
  [JuiceFlavors.GREEN_GLOW]: 'Brilho Verde',
  [JuiceFlavors.SUNSET_SIP]: 'Gole do Pôr do Sol',
  [JuiceFlavors.PEACHY_PUNCH]: 'Samba no Pêssego',
  [JuiceFlavors.GRAPE_GALAXY]: 'Galáxia de Uva',
  [JuiceFlavors.LEMON_LIFT]: 'Elevação de Limão',
  [JuiceFlavors.COOL_CUCUMBER]: 'Pepino Refrescante',
  [JuiceFlavors.BANANA_BREEZE]: 'Brisa de Banana',
  [JuiceFlavors.KIWI_KICK]: 'Constelação de Kiwi',
  [JuiceFlavors.BLUEBERRY_BOUNCE]: 'Pulo de Blueberry',
  [JuiceFlavors.PAPAYA_PARTY]: 'Festa de Mamão',
  [JuiceFlavors.RASPBERRY_RUSH]: 'Corrida de Framboesa',
  [JuiceFlavors.COCONUT_CRAZE]: 'Loucura de Coco',
};
