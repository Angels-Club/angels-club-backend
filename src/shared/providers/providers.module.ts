import { Global, Module } from '@nestjs/common';
import { EncryptionProvider } from './';

@Global()
@Module({
  providers: [EncryptionProvider],
  exports: [EncryptionProvider],
})
export class ProvidersModule {}
