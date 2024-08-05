import { Entity, PrimaryColumn, CreateDateColumn, Column } from 'typeorm';

@Entity() 
export class tags{
    @PrimaryColumn({ length: 255 })
    id: string;

    @Column({ length: 255 })
    tag: string;

    @CreateDateColumn()
    createDate: Date;

    @CreateDateColumn()
    deleteDate: Date;

    @Column()
    isDelete: boolean;
}


