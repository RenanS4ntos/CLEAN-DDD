import { Slug } from "./value-objects/slug"
import { Entity } from "../../core/entities/entity"
import { UniqueEntityID } from "../../core/entities/unique-entity-id"
import { Optional } from "../../core/types/optional"
import dayjs from "dayjs"

interface ExerciseProps {
  authorId: UniqueEntityID
  title: string
  content: string
  grade: string
  slug: Slug 
  createdAt: Date
  updatedAt?: Date
}

export class Exercise extends Entity<ExerciseProps> {

  get authorId() {
    return this.props.authorId
  }

  get title() {
    return this.props.title
  }

  set title(title: string) {
    this.props.title = title
    this.props.slug = Slug.createFromText(title)
    this.touch()
  }

  get content() {
    return this.props.content
  }

  set content(content: string) {
    this.props.content = content
    this.touch()
  }

  get grade() {
    return this.props.grade
  }

  set grade(grade: string) {
    this.props.grade = grade
    this.touch()
  }

  get createdAt() {
    return this.props.createdAt
  }

  get updatedAt() {
    return this.props.updatedAt
  }

  get isNew(): boolean {
    return dayjs().diff(this.props.createdAt, 'days') <= 3
  }

  private touch() {
    this.props.updatedAt = new Date()
  }

  static create(
    props: Optional<ExerciseProps, 'createdAt' | 'slug'>, 
    id?: UniqueEntityID
  ) {
    const exercise = new Exercise({
      ...props,
      slug: props.slug ?? Slug.createFromText(props.title),
      createdAt: new Date(),
    }, id)

    return exercise
  }
}