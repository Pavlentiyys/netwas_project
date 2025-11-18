import { User } from "src/users/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Post {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    title: string;

    @Column("text")
    description: string;

    @Column({ nullable: true })
    imageUrl: string | null;

    @Column({ nullable: true })
    videoUrl: string | null;

    @ManyToOne(() => User, (user) => user.posts, { 
        onDelete: 'SET NULL', 
        onUpdate: 'CASCADE' 
    })
    @JoinColumn({ name: 'author_id' })
    author: User;

    constructor(item: Partial<Post>){
        Object.assign(this, item);
    }
}
