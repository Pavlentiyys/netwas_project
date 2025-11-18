import { Post } from "src/posts/entities/post.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ name: "first_name" })
    firstName: string;

    @Column({ name: "last_name" })
    lastName: string;

    @Column({ nullable: true })
    avatarUrl: string | null;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column({ type: 'date'})
    dateOfBirth: string;
    
    @OneToMany(() => Post, (post) => post.author, { onDelete: 'CASCADE' })
    posts: Post[];

    constructor(item: Partial<User>){
        Object.assign(this, item);
    }
}
