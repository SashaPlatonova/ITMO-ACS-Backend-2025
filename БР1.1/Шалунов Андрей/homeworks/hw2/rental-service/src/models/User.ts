import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn } from 'typeorm';
import { Property } from './Property';
import { Booking  } from './Booking';
import { Message  } from './Message';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    user_id!: number;

    @Column()
    name!:string;

    @Column({unique: true})
    email!:string;

    @Column({ nullable: true })
    phone?:string;

    @Column()
    password!:string;

    @OneToMany(() => Property, p => p.owner)
    properties!: Property[];

    @OneToMany(() => Booking, b => b.renter)
    bookings!: Booking[];

    @OneToMany(() => Message, m => m.sender)
    sentMessages!: Message[];

    @OneToMany(() => Message, m => m.recipient)
    receivedMessages!: Message[];
}