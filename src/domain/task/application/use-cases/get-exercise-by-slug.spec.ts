import { InMemoryExercisesRepository } from 'test/repositories/in-memory-exercises-repository'
import { GetExerciseBySlugUseCase } from './get-exercise-by-slug'
import { makeExercise } from 'test/factories/make-exercise'
import { Slug } from '../../enterprise/entities/value-objects/slug'

let inMemoryExercisesRepository: InMemoryExercisesRepository
let sut: GetExerciseBySlugUseCase // sut => System under test

describe('Get Exercise By Slug', () => {
  beforeEach(() => {
    inMemoryExercisesRepository = new InMemoryExercisesRepository()
    sut = new GetExerciseBySlugUseCase(inMemoryExercisesRepository)
  })

  it('should be able to get an exercise by slug', async () => {
    const newExercise = makeExercise({
      slug: Slug.create('example-exercise'),
    })

    inMemoryExercisesRepository.create(newExercise)

    const { exercise } = await sut.execute({
      slug: 'example-exercise',
    })

    expect(exercise.id).toBeTruthy()
    expect(exercise.title).toEqual(newExercise.title)
  })
})
