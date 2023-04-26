import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [ProductModule, AuthModule, UsersModule, OrderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
