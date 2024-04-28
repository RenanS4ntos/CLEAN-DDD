import { InMemoryExercisesRepository } from 'test/repositories/in-memory-exercises-repository'
import { makeExercise } from 'test/factories/make-exercise'
import { EditExerciseUseCase } from './edit-exercise'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

let inMemoryExercisesRepository: InMemoryExercisesRepository
let sut: EditExerciseUseCase // sut => System under test

describe('Edit Exercise', () => {
  beforeEach(() => {
    inMemoryExercisesRepository = new InMemoryExercisesRepository()
    sut = new EditExerciseUseCase(inMemoryExercisesRepository)
  })

  it('should be able to edit an exercise', async () => {
    const newExercise = makeExercise(
      {
        authorId: new UniqueEntityID('1'),
      },
      new UniqueEntityID('exercise-1'),
    )

    inMemoryExercisesRepository.create(newExercise)

    await sut.execute({
      authorId: '1',
      exerciseId: newExercise.id.toString(),
      title: 'title teste',
      content: 'content teste',
    })

    expect(inMemoryExercisesRepository.items[0]).toMatchObject({
      title: 'title teste',
      content: 'content teste',
    })
  })

  it('should not be able to edit an exercise from another teacher', async () => {
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
        exerciseId: newExercise.id.toString(),
        title: 'title teste',
        content: 'content teste',
      })
    }).rejects.toBeInstanceOf(Error)
  })
})
