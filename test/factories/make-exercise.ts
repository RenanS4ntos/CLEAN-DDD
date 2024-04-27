import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import {
  Exercise,
  ExerciseProps,
} from '@/domain/task/enterprise/entities/exercise'

export function makeExercise(override: Partial<ExerciseProps> = {}) {
  const exercise = Exercise.create({
    title: 'Example Exercise',
    authorId: new UniqueEntityID(),
    content: 'Exercise content',
    ...override,
  })

  return exercise
}
