import { AnswersRepository } from '@/domain/task/application/repositories/answers-repository'
import { Answer } from '@/domain/task/enterprise/entities/answer'

export class InMemoryAnswersRepository implements AnswersRepository {
  public items: Answer[] = []

  async create(answer: Answer) {
    this.items.push(answer)
  }
}
