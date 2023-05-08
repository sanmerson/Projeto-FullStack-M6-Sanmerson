import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    BeforeInsert,
    BeforeUpdate,
    OneToMany,
  } from "typeorm";
  import { hashSync } from "bcryptjs";
import { Contacts } from "./contacts.entity";
import { Clients } from "./clients.entity";

  
  @Entity("users")
  class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column()
    username: string;
    @Column({ unique: true })
    email: string;
    @Column()
    password: string;
    @Column()
    first_name: string;
    @Column()
    last_name: string;
    @Column({ default: false })
    is_superuser: boolean;
    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    updatedAt: Date;
  
    @BeforeUpdate()
    @BeforeInsert()
    hashPassword() {
      this.password = hashSync(this.password, 10);
    }

    @OneToMany(() => Clients, (clients) => clients.user,{
      onDelete: 'CASCADE' 
    })
    clients : Clients[];
  }
  
  export { User };
  