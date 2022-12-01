import { Global, Module } from '@nestjs/common';
import { EncryptionProvider, TokenProvider } from './';

@Global()
@Module({
  providers: [EncryptionProvider, TokenProvider],
  exports: [EncryptionProvider, TokenProvider],
})
export class ProvidersModule {}
