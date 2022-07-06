/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'
import * as beetSolana from '@metaplex-foundation/beet-solana'
import {
  GumballCreatorAdapter,
  gumballCreatorAdapterBeet,
} from './GumballCreatorAdapter'
export type GumballMachineHeader = {
  urlBase: number[] /* size: 64 */
  nameBase: number[] /* size: 32 */
  symbol: number[] /* size: 8 */
  sellerFeeBasisPoints: number
  isMutable: number
  retainAuthority: number
  configLineEncodeMethod: number
  creators: GumballCreatorAdapter[] /* size: 5 */
  padding: number[] /* size: 1 */
  price: beet.bignum
  goLiveDate: beet.bignum
  mint: web3.PublicKey
  botWallet: web3.PublicKey
  receiver: web3.PublicKey
  authority: web3.PublicKey
  collectionKey: web3.PublicKey
  extensionLen: beet.bignum
  maxMintSize: number
  remaining: number
  maxItems: number
  totalItemsAdded: number
  smallestUninitializedIndex: number
  padding2: number[] /* size: 4 */
}

/**
 * @category userTypes
 * @category generated
 */
export const gumballMachineHeaderBeet =
  new beet.BeetArgsStruct<GumballMachineHeader>(
    [
      ['urlBase', beet.uniformFixedSizeArray(beet.u8, 64)],
      ['nameBase', beet.uniformFixedSizeArray(beet.u8, 32)],
      ['symbol', beet.uniformFixedSizeArray(beet.u8, 8)],
      ['sellerFeeBasisPoints', beet.u16],
      ['isMutable', beet.u8],
      ['retainAuthority', beet.u8],
      ['configLineEncodeMethod', beet.u8],
      ['creators', beet.uniformFixedSizeArray(gumballCreatorAdapterBeet, 5)],
      ['padding', beet.uniformFixedSizeArray(beet.u8, 1)],
      ['price', beet.u64],
      ['goLiveDate', beet.i64],
      ['mint', beetSolana.publicKey],
      ['botWallet', beetSolana.publicKey],
      ['receiver', beetSolana.publicKey],
      ['authority', beetSolana.publicKey],
      ['collectionKey', beetSolana.publicKey],
      ['extensionLen', beet.u64],
      ['maxMintSize', beet.u32],
      ['remaining', beet.u32],
      ['maxItems', beet.u32],
      ['totalItemsAdded', beet.u32],
      ['smallestUninitializedIndex', beet.u32],
      ['padding2', beet.uniformFixedSizeArray(beet.u8, 4)],
    ],
    'GumballMachineHeader'
  )
