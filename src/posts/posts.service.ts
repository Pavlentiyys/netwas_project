import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { EntityManager, Repository } from 'typeorm';
import { Post } from './entities/post.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
    private readonly entityManager: EntityManager,
  ){}

  async create(createPostDto: CreatePostDto) {
    const post = new Post(createPostDto);
    await this.entityManager.save(post)
    return 'This action adds a new post';
  }

  async findAll() {
    return this.postRepository.find();
  }

  async findOne(id: string) {
    return this.postRepository.findOneBy({id});
  }

  async update(id: string, updatePostDto: UpdatePostDto) {
    await this.postRepository.save({id, ...updatePostDto});
    return `This action updates a #${id} post`;
  }

  async remove(id: string) {
    await this.postRepository.delete(id);
    return `This action removes a #${id} post`;
  }
}
