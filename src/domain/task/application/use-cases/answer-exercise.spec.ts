import { InMemoryAnswersRepository } from 'test/repositories/in-memory-answers-repository'
import { AnswerExerciseUseCase } from './answer-exercise'

let inMemoryAnswersRepository: InMemoryAnswersRepository
let sut: AnswerExerciseUseCase // sut => System under test

describe('Create Answer', () => {
  beforeEach(() => {
    inMemoryAnswersRepository = new InMemoryAnswersRepository()
    sut = new AnswerExerciseUseCase(inMemoryAnswersRepository)
  })

  it('should be able to create an answer', async () => {
    const answer = await sut.execute({
      studentId: '1',
      exerciseId: '1',
      content: 'Nova resposta',
    })

    expect(answer.id).toBeTruthy()
    expect(inMemoryAnswersRepository.items[0].id).toEqual(answer.id)
  })
})
