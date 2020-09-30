
// Copyright 2020 @bifrost-finance/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';
import { Observable } from 'rxjs';
import { Token } from '@bifrost-finance/types/interfaces';

export interface timestampListAndBlockHeightList{
    timestampList: number[],
    blockHeightList: Observable<BN[]>
  }

export type CEXName = 'binance' | 'huobi' | 'okex';

export interface CEXTokenPrice{
  symbol: Token,
  price: number
}

export interface symbolUSDValue{
  symbol: Token,
  usdValue: number
}