import { Entity } from '@/core/entities/entity'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

interface TeacherProps {
  name: string
}

export class Teacher extends Entity<TeacherProps> {
  static create(props: TeacherProps, id?: UniqueEntityID) {
    const teacher = new Teacher(props, id)

    return teacher
  }
}
