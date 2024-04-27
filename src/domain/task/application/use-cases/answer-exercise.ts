import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Answer } from '../../enterprise/entities/answer'
import { AnswersRepository } from '../repositories/answers-repository'

interface AnswerExerciseUseCaseRequest {
  studentId: string
  exerciseId: string
  content: string
}

export class AnswerExerciseUseCase {
  constructor(private answerRepository: AnswersRepository) {}

  async execute({
    studentId,
    exerciseId,
    content,
  }: AnswerExerciseUseCaseRequest) {
    const answer = Answer.create({
      authorId: new UniqueEntityID(studentId),
      exerciseId: new UniqueEntityID(exerciseId),
      content,
    })

    await this.answerRepository.create(answer)

    return answer
  }
}
