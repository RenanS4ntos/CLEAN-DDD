import { Answer } from '../../enterprise/entities/answer'
import { AnswersRepository } from '../repositories/answers-repository'
import { AnswerExerciseUseCase } from './answer-exercise'

const fakeAnswersRepository: AnswersRepository = {
  create: async (answer: Answer) => {},
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
