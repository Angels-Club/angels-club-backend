import { Global, Module } from '@nestjs/common'
import { EncryptionProvider, TokenProvider, PaymentProvider } from './'

@Global()
@Module({
  providers: [EncryptionProvider, TokenProvider, PaymentProvider],
  exports: [EncryptionProvider, TokenProvider, PaymentProvider],
})
export class ProvidersModule {}
