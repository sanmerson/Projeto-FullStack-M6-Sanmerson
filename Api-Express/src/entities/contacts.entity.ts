import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
  } from "typeorm";
import { Clients } from "./clients.entity";

  
  @Entity("contacts")
  class Contacts {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column()
    name: string;
    @Column()
    email: string;
    @Column()
    phone: string;
    @Column()
    description: string;
    @CreateDateColumn()
    create_at: Date;
    @UpdateDateColumn()
    updated_at: Date;

    @ManyToOne(() => Clients, (Clients) => Clients.contacts)
    clients: Clients;

  }
  
  export { Contacts };
  