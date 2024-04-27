import { InMemoryExercisesRepository } from 'test/repositories/in-memory-exercises-repository'
import { makeExercise } from 'test/factories/make-exercise'
import { DeleteExerciseUseCase } from './delete-exercise'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

let inMemoryExercisesRepository: InMemoryExercisesRepository
let sut: DeleteExerciseUseCase // sut => System under test

describe('Delete Exercise', () => {
  beforeEach(() => {
    inMemoryExercisesRepository = new InMemoryExercisesRepository()
    sut = new DeleteExerciseUseCase(inMemoryExercisesRepository)
  })

  it('should be able to delete an exercise', async () => {
    const newExercise = makeExercise(
      {
        authorId: new UniqueEntityID('1'),
      },
      new UniqueEntityID('exercise-1'),
    )

    inMemoryExercisesRepository.create(newExercise)

    await sut.execute({
      authorId: '1',
      exerciseId: 'exercise-1',
    })

    expect(inMemoryExercisesRepository.items).toHaveLength(0)
  })

  it('should not be able to delete an exercise from another teacher', async () => {
    const newExercise = makeExercise(
      {
        authorId: new UniqueEntityID('1'),
      },
      new UniqueEntityID('exercise-1'),
    )

    inMemoryExercisesRepository.create(newExercise)

    expect(() => {
      return sut.execute({
        authorId: '2',
        exerciseId: 'exercise-1',
      })
    }).rejects.toBeInstanceOf(Error)
  })
})
