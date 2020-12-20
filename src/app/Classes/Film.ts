import { Actor } from './actor';
import { Crew } from './crew';

export class Film {
    original_title: string;
    release_date: string;
    overview: string;
    vote_averagge: number;
    vote_count: number;
    poster_path: string;
    crew_list: Array<Crew>;
    actor_list: Array<Actor>;
}