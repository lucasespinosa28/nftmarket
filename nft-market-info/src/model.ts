import type { ModelTypeAliases, EncodedManagedModel } from '@glazed/types'

import type { NftMarketInfo } from '../types/nftmarketinfo'

export type ModelTypes = ModelTypeAliases<
  { NftMarketInfo: NftMarketInfo },
  { NftMarketInfo: 'NftMarketInfo' }
>

export const model: EncodedManagedModel = {
  schemas: {
    kjzl6cwe1jw145at7sjhfw6xar2tgsz71mdvqbrpjrwa28sp8jpf8pqxutiapq0: {
      alias: 'NftMarketInfo',
      commits: [
        {
          jws: {
            payload: 'AXESIPCT6yFNyW9W5hhsqFJE8eMkspkooLnVkn8u2S1A6vwK',
            signatures: [
              {
                signature:
                  'm6i_ncl5Nisa2cVa8Nvhy32zFqaapE2ankz0YPHaR2JjqNwgzNu82lS1fTMp3Aqp2OiCC5Wn0Zxv_iGSbuFMBg',
                protected:
                  'eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa29lbllLejZNZ0pCVEhNUm1iQVpLSERMcW5ib0Z0WjdUM0hqN2IxUjF5SFc4I3o2TWtvZW5ZS3o2TWdKQlRITVJtYkFaS0hETHFuYm9GdFo3VDNIajdiMVIxeUhXOCJ9',
              },
            ],
            link: 'bafyreihqspvsctojn5lomgdmvbjej4pdeszjskfaxhkze7zo3ewub2x4bi',
          },
          linkedBlock:
            'omRkYXRhpGR0eXBlZm9iamVjdGV0aXRsZW1OZnRNYXJrZXRJbmZvZyRzY2hlbWF4J2h0dHA6Ly9qc29uLXNjaGVtYS5vcmcvZHJhZnQtMDcvc2NoZW1hI2pwcm9wZXJ0aWVzoWRkYXRhpGR0eXBlZm9iamVjdGhyZXF1aXJlZINnY3JlYXRvcmhtZXRhZGF0YWVwcmljZWpwcm9wZXJ0aWVzpGVwcmljZaJkdHlwZWZudW1iZXJrZGVzY3JpcHRpb254G1ByaWNlIG9mIG5mdCB0byBmaXJzdCBzZWxsLmdjcmVhdG9yomR0eXBlZnN0cmluZ2tkZXNjcmlwdGlvbngcQWRkcmVzcyBvZiBjcmVhdG9yIHRoaXMgbmZ0LmhtZXRhZGF0YaJkdHlwZWZzdHJpbmdrZGVzY3JpcHRpb254HXVybCB3aXRoIG1ldGFkYXRhIG9mIHRoaXMgbmZ0bGNvbnRyYWN0RGF0YaJkdHlwZWZzdHJpbmdrZGVzY3JpcHRpb254JWRhdGEgd2FzIHBhcnNlZCBpbiB0aGUgc21hcnQgY29udHJhY3RrZGVzY3JpcHRpb25wZGF0YSBvZiB0aGlzIG5mdGZoZWFkZXKiZnVuaXF1ZXBjeTdUTDVGNS9NODZDMi8xa2NvbnRyb2xsZXJzgXg4ZGlkOmtleTp6Nk1rb2VuWUt6Nk1nSkJUSE1SbWJBWktIRExxbmJvRnRaN1QzSGo3YjFSMXlIVzg=',
        },
      ],
      dependencies: {},
      version: 'k3y52l7qbv1frxhovreyk10x8sgk1ji2a3j6pn7p1omdjjyk3gs4sdz3kr5u46ww0',
    },
  },
  definitions: {
    kjzl6cwe1jw148v232bksd7ukf9qgjipbldvwnqxjnlq9cqtfl311mjqh19f3y0: {
      alias: 'NftMarketInfo',
      commits: [
        {
          jws: {
            payload: 'AXESIBHgdhM52ZUPXeNVU8v0DAEJZ0I38lWkTpneS61n4ry2',
            signatures: [
              {
                signature:
                  'NbXoG0QsG0_SftBg7I4rcuFsRb0pkW8rKaMgcsy4P1dJMb_qzUnr_DGAEObi9AUOVd2yGBt9K1i3guYGZ-tcBg',
                protected:
                  'eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa29lbllLejZNZ0pCVEhNUm1iQVpLSERMcW5ib0Z0WjdUM0hqN2IxUjF5SFc4I3o2TWtvZW5ZS3o2TWdKQlRITVJtYkFaS0hETHFuYm9GdFo3VDNIajdiMVIxeUhXOCJ9',
              },
            ],
            link: 'bafyreiar4b3bgoozsuhv3y2vkpf7idabbftuen7skwse5go6jowwpyv4wy',
          },
          linkedBlock:
            'omRkYXRho2RuYW1lbU5mdE1hcmtldEluZm9mc2NoZW1heEtjZXJhbWljOi8vazN5NTJsN3FidjFmcnhob3ZyZXlrMTB4OHNnazFqaTJhM2o2cG43cDFvbWRqanlrM2dzNHNkejNrcjV1NDZ3dzBrZGVzY3JpcHRpb254GkluZm8gYWJvdXQgbWFya2V0IGZvciBzZWxsZmhlYWRlcqNmc2NoZW1heEtjZXJhbWljOi8vazN5NTJsN3FidjFmcnkxZnA0czBud2RhcmgwdmFodXNhcnBwb3NnZXZ5MHBlbWl5a3ltZDJvcmQ2c3d0aGFyY3dmdW5pcXVlcGF5aC9xeENGZWRCSVBwMTBrY29udHJvbGxlcnOBeDhkaWQ6a2V5Ono2TWtvZW5ZS3o2TWdKQlRITVJtYkFaS0hETHFuYm9GdFo3VDNIajdiMVIxeUhXOA==',
        },
      ],
      schema: 'kjzl6cwe1jw145at7sjhfw6xar2tgsz71mdvqbrpjrwa28sp8jpf8pqxutiapq0',
      version: 'k3y52l7qbv1fry70utsibtpztd8l85mt02g2qw8vijruiqimpatxjfkcc94yzg1s0',
    },
  },
  tiles: {},
}
