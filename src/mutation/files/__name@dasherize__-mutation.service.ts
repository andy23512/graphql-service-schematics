import { Injectable } from '@angular/core';
import {
  Mutation,
  Mutation<%= classify(name) %>MutationArgs
} from '@frontend/interface';
import { gql, Mutation as MutationService } from 'apollo-angular';

@Injectable({providedIn: 'root'})
export class <%= classify(name) %>MutationService extends MutationService<
  Pick<Mutation, '<%= camelize(name) %>Mutation'>,
  Mutation<%= classify(name) %>MutationArgs
> {
  document = gql`
    mutation <%= classify(name) %>Mutation {
      <%= camelize(name) %>Mutation {
      }
    }
  `;
}
