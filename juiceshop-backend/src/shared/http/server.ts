import { AppDataSource } from '@shared/typeorm/data-source';
import { app } from './app';

AppDataSource.initialize().then(() => {
  app.listen(5000, () => {
    console.log('Server started on port 5000! :rocket: ');
  });
});
