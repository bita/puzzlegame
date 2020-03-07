import { User } from './user';

export class Images{
    id: number;
    imageUrl: string;
    ImageName: string;
    bestScore:  [
        {
            difficultyLevel: string;
            bestScore: number;
            ticks: string;
            steps: number;
            score: number;
            userName: User[];
        }];
    latestScore: [
        {
            difficultyLevel: string;
            latestScore: number;
            ticks: string;
            steps: number;
            score: number;
            userName: User[];

        }];
  }