import type { Action } from '../Action/Action'

export type Entity = {
  id: string;
  name: string;
  maxHealth: number;
  currentHealth: number;
  initiative: number;
  actions: Action[];
}