import { environment } from './environments/environment';
const apiUrl = environment.apiUrl;

export const apiEndpoints = {
  login: `${apiUrl}/auth/login`,
  signup: `${apiUrl}/users/signup`,
  exercises: `${apiUrl}/exercises`,
  workouts: `${apiUrl}/workouts`,
  getAllWorkoutPrograms: `${apiUrl}/workouts/all`
}