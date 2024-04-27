import { InMemoryExercisesRepository } from 'test/repositories/in-memory-exercises-repository'
import { CreateExerciseUseCase } from './create-exercise'

let inMemoryExercisesRepository: InMemoryExercisesRepository
let sut: CreateExerciseUseCase // sut => System under test

describe('Create Exercise', () => {
  beforeEach(() => {
    inMemoryExercisesRepository = new InMemoryExercisesRepository()
    sut = new CreateExerciseUseCase(inMemoryExercisesRepository)
  })

  it('should be able to create an exercise', async () => {
    const { exercise } = await sut.execute({
      authorId: '1',
      title: 'Trabalho sobre DDD e Clean Architecture',
      content: 'Faça uma pesquisa sobre DDD e Clean Architecture',
      grade: '0.0',
    })

    expect(exercise.id).toBeTruthy()
    expect(inMemoryExercisesRepository.items[0].id).toEqual(exercise.id)
  })
})
