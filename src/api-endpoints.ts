import { environment } from './environments/environment';
const apiUrl = environment.apiUrl;

export const apiEndpoints = {
  login: `${apiUrl}/auth/login`,
  signup: `${apiUrl}/users/signup`,
  workouts: `${apiUrl}/workouts`,
  getAllWorkoutPrograms: `${apiUrl}/workouts/all`
}