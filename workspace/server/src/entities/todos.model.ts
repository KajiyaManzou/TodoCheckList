import { Entity, PrimaryColumn, CreateDateColumn, Column } from 'typeorm';

@Entity()
export class Todos{
    @PrimaryColumn({ length: 255 })
    id: string;

    @Column({ length: 255 })
    title: string;

    @Column({ length: 255 })
    todo: string;

    @CreateDateColumn()
    createDate: Date;

    @CreateDateColumn()
    closeDate: Date;

    @Column()
    isClose: boolean;
}


