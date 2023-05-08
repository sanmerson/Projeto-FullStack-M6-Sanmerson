import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    ManyToOne,
    OneToMany,
  } from "typeorm";
import { User } from "./user.entity";
import { Contacts } from "./contacts.entity";

  
  @Entity("clients")
  class Clients {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column()
    name: string;
    @Column()
    email: string;
    @Column()
    phone: string;
    @CreateDateColumn()
    create_at: Date;

    @ManyToOne(() => User, (user) => user.clients)
    user: User

    
    @OneToMany(() => Contacts, (Contacts) => Contacts.clients)
    contacts : Contacts[];
  }
  
  export { Clients };
  