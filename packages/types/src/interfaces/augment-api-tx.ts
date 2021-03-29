// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { Bytes, Compact, Option, Vec, bool, u16, u32, u64 } from '@polkadot/types';
import type { AnyNumber } from '@polkadot/types/types';
import type { TokenBalance } from '@bifrost-finance/types/interfaces/ZenlinkDEXModule';
import type { AmountOf, XCurrencyId } from '@bifrost-finance/types/interfaces/assets';
import type { CurrencyIdOf } from '@bifrost-finance/types/interfaces/vtokenMint';
import type { Extrinsic } from '@polkadot/types/interfaces/extrinsics';
import type { MultiLocation, NetworkId, OutboundHrmpMessage, ParaId, ParachainInherentData, UpwardMessage, VersionedXcm, Xcm } from '@polkadot/types/interfaces/parachains';
import type { AccountId, AccountIndex, AssetId, Balance, BalanceOf, BlockNumber, Call, ChangesTrieConfiguration, KeyValue, LookupSource, Moment, Perbill, Weight } from '@polkadot/types/interfaces/runtime';
import type { Period, Priority } from '@polkadot/types/interfaces/scheduler';
import type { Key } from '@polkadot/types/interfaces/system';
import type { ApiTypes, SubmittableExtrinsic } from '@polkadot/api/types';

declare module '@polkadot/api/types/submittable' {
  export interface AugmentedSubmittables<ApiType> {
    balances: {
      /**
       * Exactly as `transfer`, except the origin must be root and the source account may be
       * specified.
       * # <weight>
       * - Same as transfer, but additional read and write because the source account is
       * not assumed to be in the overlay.
       * # </weight>
       **/
      forceTransfer: AugmentedSubmittable<(source: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, dest: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, value: Compact<Balance> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource, LookupSource, Compact<Balance>]>;
      /**
       * Set the balances of a given account.
       * 
       * This will alter `FreeBalance` and `ReservedBalance` in storage. it will
       * also decrease the total issuance of the system (`TotalIssuance`).
       * If the new free or reserved balance is below the existential deposit,
       * it will reset the account nonce (`frame_system::AccountNonce`).
       * 
       * The dispatch origin for this call is `root`.
       * 
       * # <weight>
       * - Independent of the arguments.
       * - Contains a limited number of reads and writes.
       * ---------------------
       * - Base Weight:
       * - Creating: 27.56 µs
       * - Killing: 35.11 µs
       * - DB Weight: 1 Read, 1 Write to `who`
       * # </weight>
       **/
      setBalance: AugmentedSubmittable<(who: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, newFree: Compact<Balance> | AnyNumber | Uint8Array, newReserved: Compact<Balance> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource, Compact<Balance>, Compact<Balance>]>;
      /**
       * Transfer some liquid free balance to another account.
       * 
       * `transfer` will set the `FreeBalance` of the sender and receiver.
       * It will decrease the total issuance of the system by the `TransferFee`.
       * If the sender's account is below the existential deposit as a result
       * of the transfer, the account will be reaped.
       * 
       * The dispatch origin for this call must be `Signed` by the transactor.
       * 
       * # <weight>
       * - Dependent on arguments but not critical, given proper implementations for
       * input config types. See related functions below.
       * - It contains a limited number of reads and writes internally and no complex computation.
       * 
       * Related functions:
       * 
       * - `ensure_can_withdraw` is always called internally but has a bounded complexity.
       * - Transferring balances to accounts that did not exist before will cause
       * `T::OnNewAccount::on_new_account` to be called.
       * - Removing enough funds from an account will trigger `T::DustRemoval::on_unbalanced`.
       * - `transfer_keep_alive` works the same way as `transfer`, but has an additional
       * check that the transfer will not kill the origin account.
       * ---------------------------------
       * - Base Weight: 73.64 µs, worst case scenario (account created, account removed)
       * - DB Weight: 1 Read and 1 Write to destination account
       * - Origin account is already in memory, so no DB operations for them.
       * # </weight>
       **/
      transfer: AugmentedSubmittable<(dest: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, value: Compact<Balance> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource, Compact<Balance>]>;
      /**
       * Same as the [`transfer`] call, but with a check that the transfer will not kill the
       * origin account.
       * 
       * 99% of the time you want [`transfer`] instead.
       * 
       * [`transfer`]: struct.Pallet.html#method.transfer
       * # <weight>
       * - Cheaper than transfer because account cannot be killed.
       * - Base Weight: 51.4 µs
       * - DB Weight: 1 Read and 1 Write to dest (sender is in overlay already)
       * #</weight>
       **/
      transferKeepAlive: AugmentedSubmittable<(dest: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, value: Compact<Balance> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource, Compact<Balance>]>;
    };
    brmlAssets: {
      /**
       * Destroy some balance from an account.
       * 
       * The dispatch origin for this call must be `Root` by the
       * transactor.
       **/
      burn: AugmentedSubmittable<(dest: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, currencyId: CurrencyIdOf | { Token: any } | string | Uint8Array, amount: Compact<BalanceOf> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource, CurrencyIdOf, Compact<BalanceOf>]>;
      /**
       * Issue some balance to an account.
       * 
       * The dispatch origin for this call must be `Root` by the
       * transactor.
       **/
      issue: AugmentedSubmittable<(dest: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, currencyId: CurrencyIdOf | { Token: any } | string | Uint8Array, amount: Compact<BalanceOf> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource, CurrencyIdOf, Compact<BalanceOf>]>;
    };
    currencies: {
      /**
       * Transfer some balance to another account under `currency_id`.
       * 
       * The dispatch origin for this call must be `Signed` by the
       * transactor.
       **/
      transfer: AugmentedSubmittable<(dest: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, currencyId: CurrencyIdOf | { Token: any } | string | Uint8Array, amount: Compact<BalanceOf> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource, CurrencyIdOf, Compact<BalanceOf>]>;
      /**
       * Transfer some native currency to another account.
       * 
       * The dispatch origin for this call must be `Signed` by the
       * transactor.
       **/
      transferNativeCurrency: AugmentedSubmittable<(dest: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, amount: Compact<BalanceOf> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource, Compact<BalanceOf>]>;
      /**
       * update amount of account `who` under `currency_id`.
       * 
       * The dispatch origin of this call must be _Root_.
       **/
      updateBalance: AugmentedSubmittable<(who: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, currencyId: CurrencyIdOf | { Token: any } | string | Uint8Array, amount: AmountOf | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource, CurrencyIdOf, AmountOf]>;
    };
    indices: {
      /**
       * Assign an previously unassigned index.
       * 
       * Payment: `Deposit` is reserved from the sender account.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * - `index`: the index to be claimed. This must not be in use.
       * 
       * Emits `IndexAssigned` if successful.
       * 
       * # <weight>
       * - `O(1)`.
       * - One storage mutation (codec `O(1)`).
       * - One reserve operation.
       * - One event.
       * -------------------
       * - DB Weight: 1 Read/Write (Accounts)
       * # </weight>
       **/
      claim: AugmentedSubmittable<(index: AccountIndex | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountIndex]>;
      /**
       * Force an index to an account. This doesn't require a deposit. If the index is already
       * held, then any deposit is reimbursed to its current owner.
       * 
       * The dispatch origin for this call must be _Root_.
       * 
       * - `index`: the index to be (re-)assigned.
       * - `new`: the new owner of the index. This function is a no-op if it is equal to sender.
       * - `freeze`: if set to `true`, will freeze the index so it cannot be transferred.
       * 
       * Emits `IndexAssigned` if successful.
       * 
       * # <weight>
       * - `O(1)`.
       * - One storage mutation (codec `O(1)`).
       * - Up to one reserve operation.
       * - One event.
       * -------------------
       * - DB Weight:
       * - Reads: Indices Accounts, System Account (original owner)
       * - Writes: Indices Accounts, System Account (original owner)
       * # </weight>
       **/
      forceTransfer: AugmentedSubmittable<(updated: AccountId | string | Uint8Array, index: AccountIndex | AnyNumber | Uint8Array, freeze: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId, AccountIndex, bool]>;
      /**
       * Free up an index owned by the sender.
       * 
       * Payment: Any previous deposit placed for the index is unreserved in the sender account.
       * 
       * The dispatch origin for this call must be _Signed_ and the sender must own the index.
       * 
       * - `index`: the index to be freed. This must be owned by the sender.
       * 
       * Emits `IndexFreed` if successful.
       * 
       * # <weight>
       * - `O(1)`.
       * - One storage mutation (codec `O(1)`).
       * - One reserve operation.
       * - One event.
       * -------------------
       * - DB Weight: 1 Read/Write (Accounts)
       * # </weight>
       **/
      free: AugmentedSubmittable<(index: AccountIndex | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountIndex]>;
      /**
       * Freeze an index so it will always point to the sender account. This consumes the deposit.
       * 
       * The dispatch origin for this call must be _Signed_ and the signing account must have a
       * non-frozen account `index`.
       * 
       * - `index`: the index to be frozen in place.
       * 
       * Emits `IndexFrozen` if successful.
       * 
       * # <weight>
       * - `O(1)`.
       * - One storage mutation (codec `O(1)`).
       * - Up to one slash operation.
       * - One event.
       * -------------------
       * - DB Weight: 1 Read/Write (Accounts)
       * # </weight>
       **/
      freeze: AugmentedSubmittable<(index: AccountIndex | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountIndex]>;
      /**
       * Assign an index already owned by the sender to another account. The balance reservation
       * is effectively transferred to the new account.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * - `index`: the index to be re-assigned. This must be owned by the sender.
       * - `new`: the new owner of the index. This function is a no-op if it is equal to sender.
       * 
       * Emits `IndexAssigned` if successful.
       * 
       * # <weight>
       * - `O(1)`.
       * - One storage mutation (codec `O(1)`).
       * - One transfer operation.
       * - One event.
       * -------------------
       * - DB Weight:
       * - Reads: Indices Accounts, System Account (recipient)
       * - Writes: Indices Accounts, System Account (recipient)
       * # </weight>
       **/
      transfer: AugmentedSubmittable<(updated: AccountId | string | Uint8Array, index: AccountIndex | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId, AccountIndex]>;
    };
    parachainSystem: {
      scheduleUpgrade: AugmentedSubmittable<(validationFunction: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Schedule a validation function upgrade without further checks.
       * 
       * Same as [`Module::schedule_upgrade`], but without checking that the new `validation_function`
       * is correct. This makes it more flexible, but also opens the door to easily brick the chain.
       **/
      scheduleUpgradeWithoutChecks: AugmentedSubmittable<(validationFunction: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Set the current validation data.
       * 
       * This should be invoked exactly once per block. It will panic at the finalization
       * phase if the call was not invoked.
       * 
       * The dispatch origin for this call must be `Inherent`
       * 
       * As a side effect, this function upgrades the current validation function
       * if the appropriate time has come.
       **/
      setValidationData: AugmentedSubmittable<(data: ParachainInherentData | { validationData?: any; relayChainState?: any; downwardMessages?: any; horizontalMessages?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [ParachainInherentData]>;
      sudoSendHrmpMessage: AugmentedSubmittable<(message: OutboundHrmpMessage | { recipient?: any; data?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [OutboundHrmpMessage]>;
      sudoSendUpwardMessage: AugmentedSubmittable<(message: UpwardMessage | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [UpwardMessage]>;
    };
    scheduler: {
      /**
       * Cancel an anonymously scheduled task.
       * 
       * # <weight>
       * - S = Number of already scheduled calls
       * - Base Weight: 22.15 + 2.869 * S µs
       * - DB Weight:
       * - Read: Agenda
       * - Write: Agenda, Lookup
       * - Will use base weight of 100 which should be good for up to 30 scheduled calls
       * # </weight>
       **/
      cancel: AugmentedSubmittable<(when: BlockNumber | AnyNumber | Uint8Array, index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [BlockNumber, u32]>;
      /**
       * Cancel a named scheduled task.
       * 
       * # <weight>
       * - S = Number of already scheduled calls
       * - Base Weight: 24.91 + 2.907 * S µs
       * - DB Weight:
       * - Read: Agenda, Lookup
       * - Write: Agenda, Lookup
       * - Will use base weight of 100 which should be good for up to 30 scheduled calls
       * # </weight>
       **/
      cancelNamed: AugmentedSubmittable<(id: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Anonymously schedule a task.
       * 
       * # <weight>
       * - S = Number of already scheduled calls
       * - Base Weight: 22.29 + .126 * S µs
       * - DB Weight:
       * - Read: Agenda
       * - Write: Agenda
       * - Will use base weight of 25 which should be good for up to 30 scheduled calls
       * # </weight>
       **/
      schedule: AugmentedSubmittable<(when: BlockNumber | AnyNumber | Uint8Array, maybePeriodic: Option<Period> | null | object | string | Uint8Array, priority: Priority | AnyNumber | Uint8Array, call: Call | { callIndex?: any; args?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [BlockNumber, Option<Period>, Priority, Call]>;
      /**
       * Anonymously schedule a task after a delay.
       * 
       * # <weight>
       * Same as [`schedule`].
       * # </weight>
       **/
      scheduleAfter: AugmentedSubmittable<(after: BlockNumber | AnyNumber | Uint8Array, maybePeriodic: Option<Period> | null | object | string | Uint8Array, priority: Priority | AnyNumber | Uint8Array, call: Call | { callIndex?: any; args?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [BlockNumber, Option<Period>, Priority, Call]>;
      /**
       * Schedule a named task.
       * 
       * # <weight>
       * - S = Number of already scheduled calls
       * - Base Weight: 29.6 + .159 * S µs
       * - DB Weight:
       * - Read: Agenda, Lookup
       * - Write: Agenda, Lookup
       * - Will use base weight of 35 which should be good for more than 30 scheduled calls
       * # </weight>
       **/
      scheduleNamed: AugmentedSubmittable<(id: Bytes | string | Uint8Array, when: BlockNumber | AnyNumber | Uint8Array, maybePeriodic: Option<Period> | null | object | string | Uint8Array, priority: Priority | AnyNumber | Uint8Array, call: Call | { callIndex?: any; args?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes, BlockNumber, Option<Period>, Priority, Call]>;
      /**
       * Schedule a named task after a delay.
       * 
       * # <weight>
       * Same as [`schedule_named`].
       * # </weight>
       **/
      scheduleNamedAfter: AugmentedSubmittable<(id: Bytes | string | Uint8Array, after: BlockNumber | AnyNumber | Uint8Array, maybePeriodic: Option<Period> | null | object | string | Uint8Array, priority: Priority | AnyNumber | Uint8Array, call: Call | { callIndex?: any; args?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes, BlockNumber, Option<Period>, Priority, Call]>;
    };
    sudo: {
      /**
       * Authenticates the current sudo key and sets the given AccountId (`new`) as the new sudo key.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * # <weight>
       * - O(1).
       * - Limited storage reads.
       * - One DB change.
       * # </weight>
       **/
      setKey: AugmentedSubmittable<(updated: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource]>;
      /**
       * Authenticates the sudo key and dispatches a function call with `Root` origin.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * # <weight>
       * - O(1).
       * - Limited storage reads.
       * - One DB write (event).
       * - Weight of derivative `call` execution + 10,000.
       * # </weight>
       **/
      sudo: AugmentedSubmittable<(call: Call | { callIndex?: any; args?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call]>;
      /**
       * Authenticates the sudo key and dispatches a function call with `Signed` origin from
       * a given account.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * # <weight>
       * - O(1).
       * - Limited storage reads.
       * - One DB write (event).
       * - Weight of derivative `call` execution + 10,000.
       * # </weight>
       **/
      sudoAs: AugmentedSubmittable<(who: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, call: Call | { callIndex?: any; args?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource, Call]>;
      /**
       * Authenticates the sudo key and dispatches a function call with `Root` origin.
       * This function does not check the weight of the call, and instead allows the
       * Sudo user to specify the weight of the call.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * # <weight>
       * - O(1).
       * - The weight of this call is defined by the caller.
       * # </weight>
       **/
      sudoUncheckedWeight: AugmentedSubmittable<(call: Call | { callIndex?: any; args?: any } | string | Uint8Array, weight: Weight | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call, Weight]>;
    };
    system: {
      /**
       * A dispatch that will fill the block weight up to the given ratio.
       **/
      fillBlock: AugmentedSubmittable<(ratio: Perbill | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Perbill]>;
      /**
       * Kill all storage items with a key that starts with the given prefix.
       * 
       * **NOTE:** We rely on the Root origin to provide us the number of subkeys under
       * the prefix we are removing to accurately calculate the weight of this function.
       * 
       * # <weight>
       * - `O(P)` where `P` amount of keys with prefix `prefix`
       * - `P` storage deletions.
       * - Base Weight: 0.834 * P µs
       * - Writes: Number of subkeys + 1
       * # </weight>
       **/
      killPrefix: AugmentedSubmittable<(prefix: Key | string | Uint8Array, subkeys: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Key, u32]>;
      /**
       * Kill some items from storage.
       * 
       * # <weight>
       * - `O(IK)` where `I` length of `keys` and `K` length of one key
       * - `I` storage deletions.
       * - Base Weight: .378 * i µs
       * - Writes: Number of items
       * # </weight>
       **/
      killStorage: AugmentedSubmittable<(keys: Vec<Key> | (Key | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Key>]>;
      /**
       * Make some on-chain remark.
       * 
       * # <weight>
       * - `O(1)`
       * # </weight>
       **/
      remark: AugmentedSubmittable<(remark: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Make some on-chain remark and emit event.
       * 
       * # <weight>
       * - `O(b)` where b is the length of the remark.
       * - 1 event.
       * # </weight>
       **/
      remarkWithEvent: AugmentedSubmittable<(remark: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Set the new changes trie configuration.
       * 
       * # <weight>
       * - `O(1)`
       * - 1 storage write or delete (codec `O(1)`).
       * - 1 call to `deposit_log`: Uses `append` API, so O(1)
       * - Base Weight: 7.218 µs
       * - DB Weight:
       * - Writes: Changes Trie, System Digest
       * # </weight>
       **/
      setChangesTrieConfig: AugmentedSubmittable<(changesTrieConfig: Option<ChangesTrieConfiguration> | null | object | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Option<ChangesTrieConfiguration>]>;
      /**
       * Set the new runtime code.
       * 
       * # <weight>
       * - `O(C + S)` where `C` length of `code` and `S` complexity of `can_set_code`
       * - 1 storage write (codec `O(C)`).
       * - 1 call to `can_set_code`: `O(S)` (calls `sp_io::misc::runtime_version` which is expensive).
       * - 1 event.
       * The weight of this function is dependent on the runtime, but generally this is very expensive.
       * We will treat this as a full block.
       * # </weight>
       **/
      setCode: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Set the new runtime code without doing any checks of the given `code`.
       * 
       * # <weight>
       * - `O(C)` where `C` length of `code`
       * - 1 storage write (codec `O(C)`).
       * - 1 event.
       * The weight of this function is dependent on the runtime. We will treat this as a full block.
       * # </weight>
       **/
      setCodeWithoutChecks: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Set the number of pages in the WebAssembly environment's heap.
       * 
       * # <weight>
       * - `O(1)`
       * - 1 storage write.
       * - Base Weight: 1.405 µs
       * - 1 write to HEAP_PAGES
       * # </weight>
       **/
      setHeapPages: AugmentedSubmittable<(pages: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64]>;
      /**
       * Set some items of storage.
       * 
       * # <weight>
       * - `O(I)` where `I` length of `items`
       * - `I` storage writes (`O(1)`).
       * - Base Weight: 0.568 * i µs
       * - Writes: Number of items
       * # </weight>
       **/
      setStorage: AugmentedSubmittable<(items: Vec<KeyValue> | (KeyValue)[]) => SubmittableExtrinsic<ApiType>, [Vec<KeyValue>]>;
    };
    timestamp: {
      /**
       * Set the current time.
       * 
       * This call should be invoked exactly once per block. It will panic at the finalization
       * phase, if this call hasn't been invoked by that time.
       * 
       * The timestamp should be greater than the previous one by the amount specified by
       * `MinimumPeriod`.
       * 
       * The dispatch origin for this call must be `Inherent`.
       * 
       * # <weight>
       * - `O(1)` (Note that implementations of `OnTimestampSet` must also be `O(1)`)
       * - 1 storage read and 1 storage mutation (codec `O(1)`). (because of `DidUpdate::take` in `on_finalize`)
       * - 1 event handler `on_timestamp_set`. Must be `O(1)`.
       * # </weight>
       **/
      set: AugmentedSubmittable<(now: Compact<Moment> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<Moment>]>;
    };
    utility: {
      /**
       * Send a call through an indexed pseudonym of the sender.
       * 
       * Filter from origin are passed along. The call will be dispatched with an origin which
       * use the same filter as the origin of this call.
       * 
       * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
       * because you expect `proxy` to have been used prior in the call stack and you do not want
       * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
       * in the Multisig pallet instead.
       * 
       * NOTE: Prior to version *12, this was called `as_limited_sub`.
       * 
       * The dispatch origin for this call must be _Signed_.
       **/
      asDerivative: AugmentedSubmittable<(index: u16 | AnyNumber | Uint8Array, call: Call | { callIndex?: any; args?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, Call]>;
      /**
       * Send a batch of dispatch calls.
       * 
       * May be called from any origin.
       * 
       * - `calls`: The calls to be dispatched from the same origin.
       * 
       * If origin is root then call are dispatch without checking origin filter. (This includes
       * bypassing `frame_system::Config::BaseCallFilter`).
       * 
       * # <weight>
       * - Complexity: O(C) where C is the number of calls to be batched.
       * # </weight>
       * 
       * This will return `Ok` in all circumstances. To determine the success of the batch, an
       * event is deposited. If a call failed and the batch was interrupted, then the
       * `BatchInterrupted` event is deposited, along with the number of successful calls made
       * and the error of the failed call. If all were successful, then the `BatchCompleted`
       * event is deposited.
       **/
      batch: AugmentedSubmittable<(calls: Vec<Call> | (Call | { callIndex?: any; args?: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Call>]>;
      /**
       * Send a batch of dispatch calls and atomically execute them.
       * The whole transaction will rollback and fail if any of the calls failed.
       * 
       * May be called from any origin.
       * 
       * - `calls`: The calls to be dispatched from the same origin.
       * 
       * If origin is root then call are dispatch without checking origin filter. (This includes
       * bypassing `frame_system::Config::BaseCallFilter`).
       * 
       * # <weight>
       * - Complexity: O(C) where C is the number of calls to be batched.
       * # </weight>
       **/
      batchAll: AugmentedSubmittable<(calls: Vec<Call> | (Call | { callIndex?: any; args?: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Call>]>;
    };
    voucher: {
      destroyVoucher: AugmentedSubmittable<(dest: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, amount: Compact<Balance> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource, Compact<Balance>]>;
      exportAllVouchers: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      intializeAllVoucher: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      issueVoucher: AugmentedSubmittable<(dest: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, amount: Compact<Balance> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource, Compact<Balance>]>;
    };
    vtokenMint: {
      /**
       * Mint vtoken.
       * 
       * The dispatch origin for this call must be `Signed` by the
       * transactor.
       **/
      mint: AugmentedSubmittable<(currencyId: CurrencyIdOf | { Token: any } | string | Uint8Array, tokenAmount: Compact<BalanceOf> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [CurrencyIdOf, Compact<BalanceOf>]>;
      /**
       * Redeem token.
       * 
       * The dispatch origin for this call must be `Signed` by the
       * transactor.
       **/
      redeem: AugmentedSubmittable<(currencyId: CurrencyIdOf | { Token: any } | string | Uint8Array, vtokenAmount: Compact<BalanceOf> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [CurrencyIdOf, Compact<BalanceOf>]>;
      /**
       * Set price for minting vtoken.
       * 
       * The dispatch origin for this call must be `Root` by the
       * transactor.
       **/
      setVtokenPool: AugmentedSubmittable<(currencyId: CurrencyIdOf | { Token: any } | string | Uint8Array, newTokenPool: Compact<BalanceOf> | AnyNumber | Uint8Array, newVtokenPool: Compact<BalanceOf> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [CurrencyIdOf, Compact<BalanceOf>, Compact<BalanceOf>]>;
    };
    xcmHandler: {
      sendHrmpXcm: AugmentedSubmittable<(recipient: ParaId | AnyNumber | Uint8Array, message: VersionedXcm | { V0: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [ParaId, VersionedXcm]>;
      sendUpwardXcm: AugmentedSubmittable<(message: VersionedXcm | { V0: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [VersionedXcm]>;
      sendXcm: AugmentedSubmittable<(dest: MultiLocation | { Null: any } | { X1: any } | { X2: any } | { X3: any } | { X4: any } | string | Uint8Array, message: Xcm | { WithdrawAsset: any } | { ReserveAssetDeposit: any } | { TeleportAsset: any } | { Balances: any } | { Transact: any } | { RelayTo: any } | { RelayedFrom: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiLocation, Xcm]>;
    };
    xTokens: {
      /**
       * Transfer tokens to parachain.
       **/
      transferToParachain: AugmentedSubmittable<(xCurrencyId: XCurrencyId | { chainId?: any; currencyId?: any } | string | Uint8Array, paraId: ParaId | AnyNumber | Uint8Array, dest: AccountId | string | Uint8Array, destNetwork: NetworkId | { Any: any } | { Named: any } | { Polkadot: any } | { Kusama: any } | string | Uint8Array, amount: Balance | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [XCurrencyId, ParaId, AccountId, NetworkId, Balance]>;
      /**
       * Transfer relay chain tokens to relay chain.
       **/
      transferToRelayChain: AugmentedSubmittable<(dest: AccountId | string | Uint8Array, amount: Balance | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId, Balance]>;
    };
    zenlinkProtocol: {
      /**
       * Provide liquidity to a pair.
       * 
       * The order of asset dot effect result.
       * 
       * # Arguments
       * 
       * * `token_0`: Token that make up pair
       * * `token_1`: Token that make up pair
       * * `amount_0_desired`: Maximum amount of token_0 added to the pair
       * * `amount_1_desired`: Maximum amount of token_1 added to the pair
       * * `amount_0_min`: Minimum amount of token_0 added to the pair
       * * `amount_1_min`: Minimum amount of token_1 added to the pair
       * * `deadline`: Height of the cutoff block of this transaction
       **/
      addLiquidity: AugmentedSubmittable<(token0: AssetId | AnyNumber | Uint8Array, token1: AssetId | AnyNumber | Uint8Array, amount0Desired: Compact<TokenBalance> | AnyNumber | Uint8Array, amount1Desired: Compact<TokenBalance> | AnyNumber | Uint8Array, amount0Min: Compact<TokenBalance> | AnyNumber | Uint8Array, amount1Min: Compact<TokenBalance> | AnyNumber | Uint8Array, deadline: Compact<BlockNumber> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AssetId, AssetId, Compact<TokenBalance>, Compact<TokenBalance>, Compact<TokenBalance>, Compact<TokenBalance>, Compact<BlockNumber>]>;
      /**
       * Create pair by tow asset.
       * 
       * The order of asset dot effect result.
       * 
       * # Arguments
       * 
       * * `token_0`: Token that make up Pair
       * * `token_1`: Token that make up Pair
       **/
      createPair: AugmentedSubmittable<(token0: AssetId | AnyNumber | Uint8Array, token1: AssetId | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AssetId, AssetId]>;
      /**
       * Extract liquidity.
       * 
       * The order of asset dot effect result.
       * 
       * # Arguments
       * 
       * * `token_0`: Token that make up pair
       * * `token_1`: Token that make up pair
       * * `amount_token_0_min`: Minimum amount of token_0 to exact
       * * `amount_token_1_min`: Minimum amount of token_1 to exact
       * * `to`: Account that accepts withdrawal of assets
       * * `deadline`: Height of the cutoff block of this transaction
       **/
      removeLiquidity: AugmentedSubmittable<(token0: AssetId | AnyNumber | Uint8Array, token1: AssetId | AnyNumber | Uint8Array, liquidity: Compact<TokenBalance> | AnyNumber | Uint8Array, amountToken0Min: Compact<TokenBalance> | AnyNumber | Uint8Array, amountToken1Min: Compact<TokenBalance> | AnyNumber | Uint8Array, to: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, deadline: Compact<BlockNumber> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AssetId, AssetId, Compact<TokenBalance>, Compact<TokenBalance>, Compact<TokenBalance>, LookupSource, Compact<BlockNumber>]>;
      /**
       * Sell amount of asset by path.
       * 
       * # Arguments
       * 
       * * `amount_in`: Amount asset will be sold
       * * `amount_out_min`: Minimum amount of target asset
       * * `path`: path can convert to pairs.
       * * `to`: Account that receive the target asset
       * * `deadline`: Height of the cutoff block of this transaction
       **/
      swapExactTokensForTokens: AugmentedSubmittable<(amountIn: Compact<TokenBalance> | AnyNumber | Uint8Array, amountOutMin: Compact<TokenBalance> | AnyNumber | Uint8Array, path: Vec<AssetId> | (AssetId | AnyNumber | Uint8Array)[], to: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, deadline: Compact<BlockNumber> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<TokenBalance>, Compact<TokenBalance>, Vec<AssetId>, LookupSource, Compact<BlockNumber>]>;
      /**
       * Buy amount of asset by path.
       * 
       * # Arguments
       * 
       * * `amount_out`: Amount asset will be bought
       * * `amount_in_max`: Maximum amount of sold asset
       * * `path`: path can convert to pairs.
       * * `to`: Account that receive the target asset
       * * `deadline`: Height of the cutoff block of this transaction
       **/
      swapTokensForExactTokens: AugmentedSubmittable<(amountOut: Compact<TokenBalance> | AnyNumber | Uint8Array, amountInMax: Compact<TokenBalance> | AnyNumber | Uint8Array, path: Vec<AssetId> | (AssetId | AnyNumber | Uint8Array)[], to: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, deadline: Compact<BlockNumber> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<TokenBalance>, Compact<TokenBalance>, Vec<AssetId>, LookupSource, Compact<BlockNumber>]>;
      /**
       * Transfer zenlink assets to a sibling parachain.
       * 
       * Zenlink assets can be either native or foreign to the sending parachain.
       * 
       * # Arguments
       * 
       * * `asset_id`: Global identifier for a zenlink asset
       * * `para_id`: Destination parachain
       * * `account`: Destination account
       * * `amount`: Amount to transfer
       **/
      transferToParachain: AugmentedSubmittable<(assetId: AssetId | AnyNumber | Uint8Array, paraId: ParaId | AnyNumber | Uint8Array, account: AccountId | string | Uint8Array, amount: Compact<TokenBalance> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AssetId, ParaId, AccountId, Compact<TokenBalance>]>;
    };
  }

  export interface SubmittableExtrinsics<ApiType extends ApiTypes> extends AugmentedSubmittables<ApiType> {
    (extrinsic: Call | Extrinsic | Uint8Array | string): SubmittableExtrinsic<ApiType>;
  }
}
