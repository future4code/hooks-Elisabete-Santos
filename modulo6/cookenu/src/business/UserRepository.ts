import { DatabaseCreateUserDTO } from "../model/DatabaseCreateUserDTO";
import { DatabaseUnfollowUserDTO } from "../model/DatabaseUnfollowUserDTO";
import { OutputFollowUserDTO } from "../model/OutputFollowUserDTO";
import { OutputUserDTO } from "../model/OutputUserDTO";
import { ResponseFeedDTO } from "../model/ResponseFeedDTO";

export interface UserRepository {
  createUser(userData: DatabaseCreateUserDTO): Promise<void>;
  searchUserByEmail(email: string): Promise<OutputUserDTO[]>;
  searchUserById(id: string): Promise<OutputUserDTO[]>;
  followUser(databaseObject: OutputFollowUserDTO): Promise<void>;
  unfollowUser(databaseObject: DatabaseUnfollowUserDTO): Promise<void>;
  searchConnectionById(
    userFollowerId: string,
    userToFollowId: string
  ): Promise<OutputUserDTO[]>;
  getFeed(id: string): Promise<ResponseFeedDTO[]>;
  unfollowAll(id: string): Promise<void>;
  deleteUser(id: string): Promise<void>;
  resetPassword(email: string, newPassword: string): Promise<void>;
}