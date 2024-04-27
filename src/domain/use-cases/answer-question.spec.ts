import { expect, test } from 'vitest'
import { AnswerExerciseUseCase } from './answer-exercise'
import { AnswersRepository } from '../repositories/answers-repository'
import { Answer } from '../entities/answer';

const fakeAnswersRepository: AnswersRepository = {
  create: async ( answer: Answer ) => {
    return;
  },
}

test('create an answer', async () => {
  const answerExercise = new AnswerExerciseUseCase(fakeAnswersRepository)

  const answer = await answerExercise.execute({
    studentId: '1',
    exerciseId: '1',
    content: 'Nova resposta'
  })

  expect(answer.content).toEqual('Nova resposta')
})