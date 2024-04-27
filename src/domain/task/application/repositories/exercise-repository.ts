import { Exercise } from '../../enterprise/entities/exercise'

export interface ExerciseRepository {
  create(exercise: Exercise): Promise<void>
  findBySlug(slug: string): Promise<Exercise | null>
}
