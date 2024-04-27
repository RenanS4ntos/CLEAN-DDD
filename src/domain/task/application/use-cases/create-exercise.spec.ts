import { Exercise } from '../../enterprise/entities/exercise'
import { ExerciseRepository } from '../repositories/exercise-repository'
import { CreateExerciseUseCase } from './create-exercise'

const fakeExerciseRepository: ExerciseRepository = {
  create: async (exercise: Exercise) => {},
}

test('create an exercise', async () => {
  const createExercise = new CreateExerciseUseCase(fakeExerciseRepository)

  const { exercise } = await createExercise.execute({
    authorId: '1',
    title: 'Trabalho sobre DDD e Clean Architecture',
    content: 'Faça uma pesquisa sobre DDD e Clean Architecture',
    grade: '0.0',
  })

  expect(exercise.id).toBeTruthy()
})
