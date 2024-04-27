import { Exercise } from '../../enterprise/entities/exercise'

export interface ExerciseRepository {
  create(exercise: Exercise): Promise<void>
}
