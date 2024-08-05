import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class tagMaps {
    @PrimaryColumn({ length: 255 })
    id: string;

    @Column({ length: 255 })
    todoId: string;

    @Column({ length: 255 })
    tagId: string;
}


