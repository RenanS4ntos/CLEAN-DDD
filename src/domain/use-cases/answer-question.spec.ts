import { AnswerExerciseUseCase } from './answer-exercise'
import { AnswersRepository } from '../repositories/answers-repository'

const fakeAnswersRepository: AnswersRepository = {
  create: async () => {},
}

test('create an answer', async () => {
  const answerExercise = new AnswerExerciseUseCase(fakeAnswersRepository)

  const answer = await answerExercise.execute({
    studentId: '1',
    exerciseId: '1',
    content: 'Nova resposta',
  })

  expect(answer.content).toEqual('Nova resposta')
})
