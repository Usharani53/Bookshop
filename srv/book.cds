using { mybookshop as bs} from '../db/schema';

service Bookshopservice @(path : '/odata/v4/bookshop') {
 @odata.draft.enabled entity book
  as projection on bs.Books;
        
}