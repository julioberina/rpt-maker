import { environment } from './environments/environment';
const apiUrl = environment.apiUrl;

export const apiEndpoints = {
  login: `${apiUrl}/auth/login`,
  workouts: `${apiUrl}/workouts`,
  allWorkouts: `${apiUrl}/workouts/all`
}