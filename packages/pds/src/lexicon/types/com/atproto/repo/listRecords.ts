/**
 * GENERATED CODE - DO NOT MODIFY
 */
import express from 'express'
import { ValidationResult } from '@atproto/lexicon'
import { lexicons } from '../../../../lexicons'
import { isObj, hasProp } from '../../../../util'
import { HandlerAuth } from '@atproto/xrpc-server'

export interface QueryParams {
  /** The handle or DID of the repo. */
  user: string
  /** The NSID of the record type. */
  collection: string
  /** The number of records to return. */
  limit: number
  /** A TID to filter the range of records returned. */
  before?: string
  /** A TID to filter the range of records returned. */
  after?: string
  /** Reverse the order of the returned records? */
  reverse?: boolean
}

export type InputSchema = undefined

export interface OutputSchema {
  cursor?: string
  records: Record[]
  [k: string]: unknown
}

export type HandlerInput = undefined

export interface HandlerSuccess {
  encoding: 'application/json'
  body: OutputSchema
}

export interface HandlerError {
  status: number
  message?: string
}

export type HandlerOutput = HandlerError | HandlerSuccess
export type Handler<HA extends HandlerAuth = never> = (ctx: {
  auth: HA
  params: QueryParams
  input: HandlerInput
  req: express.Request
  res: express.Response
}) => Promise<HandlerOutput> | HandlerOutput

export interface Record {
  uri: string
  cid: string
  value: {}
  [k: string]: unknown
}

export function isRecord(v: unknown): v is Record {
  return (
    isObj(v) &&
    hasProp(v, '$type') &&
    v.$type === 'com.atproto.repo.listRecords#record'
  )
}

export function validateRecord(v: unknown): ValidationResult {
  return lexicons.validate('com.atproto.repo.listRecords#record', v)
}
