"use client";

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Check, Circle } from 'lucide-react';

type CatalogItem = {
  id: number;
  name: string;
  description: string;
  price: string;
  quantity: number;
  image: string;
};

const items: CatalogItem[] = [
  {
    id: 1,
    name: 'Belgian Dark Chocolate Bar',
    description: '70% cacao, fair trade',
    price: '12.99',
    quantity: 1,
    image:
      'data:image/svg+xml;utf8,<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="%23F3E8E0"/><rect x="15" y="15" width="30" height="30" rx="4" fill="%236B4226"/><rect x="55" y="15" width="30" height="30" rx="4" fill="%236B4226"/><rect x="15" y="55" width="30" height="30" rx="4" fill="%236B4226"/><rect x="55" y="55" width="30" height="30" rx="4" fill="%236B4226"/><path d="M15 15L45 45M55 15L85 45M15 55L45 85M55 55L85 85" stroke="%235A3520" stroke-width="2" stroke-linecap="round"/></svg>'
  },
  {
    id: 2,
    name: 'Truffle Sea Salt Popcorn',
    description: 'Small batch, 100g',
    price: '16.99',
    quantity: 1,
    image:
      'data:image/svg+xml;utf8,<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="%23E2E8F0"/><circle cx="50" cy="55" r="40" fill="%23F8FAFC"/><circle cx="35" cy="45" r="10" fill="%23FEF08A"/><circle cx="55" cy="35" r="12" fill="%23FDE047"/><circle cx="70" cy="50" r="14" fill="%23FEF08A"/><circle cx="45" cy="65" r="15" fill="%23FDE047"/><circle cx="65" cy="70" r="10" fill="%23FEF08A"/><circle cx="30" cy="60" r="12" fill="%23FDE047"/><circle cx="50" cy="50" r="8" fill="%23FBBF24"/></svg>'
  },
  {
    id: 3,
    name: 'Almond Biscotti',
    description: 'Handcrafted, 3 pcs',
    price: '20.99',
    quantity: 1,
    image:
      'data:image/svg+xml;utf8,<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="%23F3F4F6"/><circle cx="50" cy="55" r="40" fill="%23FFFFFF" stroke="%23E5E7EB" stroke-width="2"/><path d="M30 35 L45 80 L55 75 L40 30 Z" fill="%23D4A373"/><path d="M50 30 L65 75 L75 70 L60 25 Z" fill="%23C28E5C"/><path d="M20 45 L35 70 L45 65 L30 40 Z" fill="%23E6CCB2"/><circle cx="38" cy="45" r="2" fill="%234B5563"/><circle cx="45" cy="65" r="2.5" fill="%234B5563"/><circle cx="60" cy="40" r="2" fill="%234B5563"/><circle cx="65" cy="55" r="2" fill="%234B5563"/><circle cx="35" cy="55" r="1.5" fill="%234B5563"/></svg>'
  },
  {
    id: 4,
    name: 'Mint Green Tea Sachets',
    description: '10 sachets',
    price: '12.99',
    quantity: 1,
    image:
      'data:image/svg+xml;utf8,<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="%23F8FAFC"/><rect x="25" y="35" width="50" height="45" rx="8" fill="%23D9F99D" fill-opacity="0.6"/><path d="M75 45 C88 45 88 65 75 65" stroke="%23D9F99D" stroke-width="6" fill="none"/><path d="M35 35 Q50 20 65 35" stroke="%2386EFAC" stroke-width="2" fill="none"/><path d="M40 45 Q45 60 55 45 Z" fill="%234ADE80"/><path d="M50 50 Q55 65 65 55 Z" fill="%2322C55E"/></svg>'
  }
];

const CardContent = () => {
  return (
    <div className="w-full rounded-[26px] border border-black/10 bg-white/92 px-4 py-5 shadow-[0_22px_60px_-48px_rgba(12,32,61,0.45)] dark:border-white/10 dark:bg-[#0d131c]/92 sm:px-8 sm:py-7">
      <div className="mb-5 flex items-center gap-3 sm:mb-6">
        <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">Monthly Subscription</h3>
        <span className="rounded-full border border-black/10 bg-black/[0.04] px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wide text-foreground/55 dark:border-white/10 dark:bg-white/[0.06] dark:text-white/70">
          4 Items
        </span>
      </div>

      <div className="mb-6 flex flex-wrap gap-2.5 sm:mb-7">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/35 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-300">
          <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
          Paid
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/35 bg-amber-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-amber-700 dark:text-amber-300">
          <Circle className="h-3.5 w-3.5" strokeWidth={2.5} />
          Fulfillment Pending
        </span>
      </div>

      <div className="flex flex-col">
        {items.map((item, idx) => (
          <div key={item.id} className={`flex items-center gap-3 py-3.5 sm:gap-4 sm:py-4 ${idx !== items.length - 1 ? 'border-b border-black/10 dark:border-white/10' : ''}`}>
            <img
              src={item.image}
              alt={item.name}
              className="h-14 w-14 rounded-xl object-cover shadow-[0_2px_12px_rgba(0,0,0,0.08)] sm:h-[68px] sm:w-[68px]"
            />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-foreground sm:text-[15px]">{item.name}</p>
              <p className="text-xs text-foreground/60 sm:text-[13px]">{item.description}</p>
            </div>
            <div className="flex items-center gap-2.5 sm:gap-3">
              <span className="text-xs text-foreground/50 sm:text-sm">{item.quantity}x</span>
              <span className="min-w-[50px] text-right text-sm font-medium text-foreground sm:text-[15px]">${item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

type IntegrationNode = {
  id: 'chatgpt' | 'mailchimp' | 'dropbox' | 'gmail' | 'quickbooks' | 'slack';
  x: number;
  y: number;
  bg: string;
  branch: 'left' | 'right';
};

const integrationNodes: IntegrationNode[] = [
  { id: 'chatgpt', x: 230, y: 160, bg: '#10a37f', branch: 'left' },
  { id: 'dropbox', x: 140, y: 350, bg: '#0061fe', branch: 'left' },
  { id: 'quickbooks', x: 230, y: 540, bg: '#2ca01c', branch: 'left' },
  { id: 'mailchimp', x: 570, y: 160, bg: '#ffe01b', branch: 'right' },
  { id: 'gmail', x: 660, y: 350, bg: '#f3f4f6', branch: 'right' },
  { id: 'slack', x: 570, y: 540, bg: '#4a154b', branch: 'right' }
];

const integrationIcons: Record<IntegrationNode['id'] | 'center', React.ReactNode> = {
  chatgpt: (
    <svg viewBox="0 0 24 24" className="h-14 w-14 text-white">
      <path fill="currentColor" d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"/>
    </svg>
  ),
  mailchimp: (
    <svg viewBox="0 0 24 24" className="h-14 w-14 text-black">
      <path fill="currentColor" d="M11.267 0C6.791-.015-1.82 10.246 1.397 12.964l.79.669a3.88 3.88 0 0 0-.22 1.792c.084.84.518 1.644 1.22 2.266.666.59 1.542.964 2.392.964 1.406 3.24 4.62 5.228 8.386 5.34 4.04.12 7.433-1.776 8.854-5.182.093-.24.488-1.316.488-2.267 0-.956-.54-1.352-.885-1.352-.01-.037-.078-.286-.172-.586-.093-.3-.19-.51-.19-.51.375-.563.382-1.065.332-1.35-.053-.353-.2-.653-.496-.964-.296-.311-.902-.63-1.753-.868l-.446-.124c-.002-.019-.024-1.053-.043-1.497-.014-.32-.042-.822-.197-1.315-.186-.668-.508-1.253-.911-1.627 1.112-1.152 1.806-2.422 1.804-3.511-.003-2.095-2.576-2.729-5.746-1.416l-.672.285A678.22 678.22 0 0 0 12.7.504C12.304.159 11.817.002 11.267 0zm.073.873c.166 0 .322.019.465.058.297.084 1.28 1.224 1.28 1.224s-1.826 1.013-3.52 2.426c-2.28 1.757-4.005 4.311-5.037 7.082-.811.158-1.526.618-1.963 1.253-.261-.218-.748-.64-.834-.804-.698-1.326.761-3.902 1.781-5.357C5.834 3.44 9.37.867 11.34.873zm3.286 3.273c.04-.002.06.05.028.074-.143.11-.299.26-.413.414a.04.04 0 0 0 .031.064c.659.004 1.587.235 2.192.574.041.023.012.103-.034.092-.915-.21-2.414-.369-3.97.01-1.39.34-2.45.863-3.224 1.426-.04.028-.086-.023-.055-.06.896-1.035 1.999-1.935 2.987-2.44.034-.018.07.019.052.052-.079.143-.23.447-.278.678-.007.035.032.063.062.042.615-.42 1.684-.868 2.622-.926zm3.023 3.205l.056.001a.896.896 0 0 1 .456.146c.534.355.61 1.216.638 1.845.015.36.059 1.229.074 1.478.034.571.184.651.487.751.17.057.33.098.563.164.706.198 1.125.4 1.39.658.157.162.23.333.253.497.083.608-.472 1.36-1.942 2.041-1.607.746-3.557.935-4.904.785l-.471-.053c-1.078-.145-1.693 1.247-1.046 2.201.417.615 1.552 1.015 2.688 1.015 2.604 0 4.605-1.111 5.35-2.072a.987.987 0 0 0 .06-.085c.036-.055.006-.085-.04-.054-.608.416-3.31 2.069-6.2 1.571 0 0-.351-.057-.672-.182-.255-.1-.788-.344-.853-.891 2.333.72 3.801.039 3.801.039a.072.072 0 0 0 .042-.072.067.067 0 0 0-.074-.06s-1.911.283-3.718-.378c.197-.64.72-.408 1.51-.345a11.045 11.045 0 0 0 3.647-.394c.818-.234 1.892-.697 2.727-1.356.281.618.38 1.299.38 1.299s.219-.04.4.073c.173.106.299.326.213.895-.176 1.063-.628 1.926-1.387 2.72a5.714 5.714 0 0 1-1.666 1.244c-.34.18-.704.334-1.087.46-2.863.935-5.794-.093-6.739-2.3a3.545 3.545 0 0 1-.189-.522c-.403-1.455-.06-3.2 1.008-4.299.065-.07.132-.153.132-.256 0-.087-.055-.179-.102-.243-.374-.543-1.669-1.466-1.409-3.254.187-1.284 1.31-2.189 2.357-2.135.089.004.177.01.266.015.453.027.85.085 1.223.1.625.028 1.187-.063 1.853-.618.225-.187.405-.35.71-.401.028-.005.092-.028.215-.028zm.022 2.18a.42.42 0 0 0-.06.005c-.335.054-.347.468-.228 1.04.068.32.187.595.32.765.175-.02.343-.022.498 0 .089-.205.104-.557.024-.942-.112-.535-.261-.872-.554-.868zm-3.66 1.546a1.724 1.724 0 0 0-1.016.326c-.16.117-.311.28-.29.378.008.032.031.056.088.063.131.015.592-.217 1.122-.25.374-.023.684.094.923.2.239.104.386.173.443.113.037-.038.026-.11-.031-.204-.118-.192-.36-.387-.618-.497a1.601 1.601 0 0 0-.621-.129zm4.082.81c-.171-.003-.313.186-.317.42-.004.236.131.43.303.432.172.003.314-.185.318-.42.004-.236-.132-.429-.304-.432zm-3.58.172c-.05 0-.102.002-.155.008-.311.05-.483.152-.593.247-.094.082-.152.173-.152.237a.075.075 0 0 0 .075.076c.07 0 .228-.063.228-.063a1.98 1.98 0 0 1 1.001-.104c.157.018.23.027.265-.026.01-.016.022-.049-.01-.1-.063-.103-.311-.269-.66-.275zm2.26.4c-.127 0-.235.051-.283.148-.075.154.035.363.246.466.21.104.443.063.52-.09.075-.155-.035-.364-.246-.467a.542.542 0 0 0-.237-.058zm-11.635.024c.048 0 .098 0 .149.003.73.04 1.806.6 2.052 2.19.217 1.41-.128 2.843-1.449 3.069-.123.02-.248.029-.374.026-1.22-.033-2.539-1.132-2.67-2.435-.145-1.44.591-2.548 1.894-2.811.117-.024.252-.04.398-.042zm-.07.927a1.144 1.144 0 0 0-.847.364c-.38.418-.439.988-.366 1.19.027.073.07.094.1.098.064.008.16-.039.22-.2a1.2 1.2 0 0 0 .017-.052 1.58 1.58 0 0 1 .157-.37.689.689 0 0 1 .955-.199c.266.174.369.5.255.81-.058.161-.154.469-.133.721.043.511.357.717.64.738.274.01.466-.143.515-.256.029-.067.005-.107-.011-.125-.043-.053-.113-.037-.18-.021a.638.638 0 0 1-.16.022.347.347 0 0 1-.294-.148c-.078-.12-.073-.3.013-.504.011-.028.025-.058.04-.092.138-.308.368-.825.11-1.317-.195-.37-.513-.602-.894-.65a1.135 1.135 0 0 0-.138-.01z"/>
    </svg>
  ),
  dropbox: (
    <svg viewBox="0 0 24 24" className="h-14 w-14 text-white">
      <path fill="currentColor" d="M6 1.807L0 5.629l6 3.822 6.001-3.822L6 1.807zM18 1.807l-6 3.822 6 3.822 6-3.822-6-3.822zM0 13.274l6 3.822 6.001-3.822L6 9.452l-6 3.822zM18 9.452l-6 3.822 6 3.822 6-3.822-6-3.822zM6 18.371l6.001 3.822 6-3.822-6-3.822L6 18.371z"/>
    </svg>
  ),
  gmail: (
    <svg viewBox="0 0 48 48" className="h-14 w-14">
      <path fill="#4285F4" d="M45 16.2V38c0 2.2-1.8 4-4 4H14.6l-1.8-6.6L10 26.2l4.7-10V10c0-2.2 1.8-4 4-4h18c2.2 0 4 1.8 4 4v6.2z" />
      <path fill="#34A853" d="M10 26.2V42h4.6V26.2L10 26.2z" />
      <path fill="#EA4335" d="M45 16.2L34.1 24 45 31.8V16.2z" />
      <path fill="#FBBC05" d="M10 16.2V6h4.6v10.2L10 16.2z" />
      <path fill="#EA4335" d="M10 16.2l14.1 10 10-7.1 10.9-2.9V6c0-2.2-1.8-4-4-4H18.7c-2.2 0-4 1.8-4 4v10.2z" />
    </svg>
  ),
  quickbooks: (
    <svg viewBox="0 0 24 24" className="h-14 w-14 text-white">
      <path fill="currentColor" d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm.642 4.1335c.9554 0 1.7296.776 1.7296 1.7332v9.0667h1.6c1.614 0 2.9275-1.3156 2.9275-2.933 0-1.6173-1.3136-2.9333-2.9276-2.9333h-.6654V7.3334h.6654c2.5722 0 4.6577 2.0897 4.6577 4.667 0 2.5774-2.0855 4.6666-4.6577 4.6666H12.642zM7.9837 7.333h3.3291v12.533c-.9555 0-1.73-.7759-1.73-1.7332V9.0662H7.9837c-1.6146 0-2.9277 1.316-2.9277 2.9334 0 1.6175 1.3131 2.9333 2.9277 2.9333h.6654v1.7332h-.6654c-2.5725 0-4.6577-2.0892-4.6577-4.6665 0-2.5771 2.0852-4.6666 4.6577-4.6666Z"/>
    </svg>
  ),
  slack: (
    <svg viewBox="0 0 24 24" className="h-14 w-14">
      <path fill="#E01E5A" d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z"/>
      <path fill="#36C5F0" d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z"/>
      <path fill="#2EB67D" d="M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312z"/>
      <path fill="#ECB22E" d="M15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
    </svg>
  ),
  center: (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-gray-300 dark:text-white/70">
      <rect x="8" y="10" width="10" height="6" rx="1.5" fill="currentColor" />
      <rect x="8" y="24" width="10" height="6" rx="1.5" fill="currentColor" />
      <rect x="22" y="10" width="10" height="20" rx="1.5" fill="currentColor" />
      <rect x="12" y="17" width="14" height="6" rx="1.5" fill="currentColor" />
    </svg>
  )
};

const IntegrationsAutomationCard = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsMounted(true), 100);
    return () => window.clearTimeout(timer);
  }, []);

  const centerX = 400;
  const centerY = 350;
  const pivotOffset = 100;

  const getPathData = (node: IntegrationNode) => {
    const sideMultiplier = node.branch === 'left' ? -1 : 1;
    const pivotX = centerX + pivotOffset * sideMultiplier;
    return `M ${centerX} ${centerY} L ${pivotX} ${centerY} L ${node.x} ${node.y}`;
  };

  return (
    <div className="flex flex-col">
      <div className="max-w-5xl">
        <h2 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          API Integrations & Automations
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-foreground/62 sm:text-xl sm:leading-[1.45]">
          Connect the dots behind the scenes. Inventory sync, ERP/CRM hookups, order routing, automate your workflows
          so you spend less time on tasks and more time selling.
        </p>
      </div>

      <div className="mt-12 select-none sm:mt-14 relative rounded-[26px] border border-black/10 bg-white/92 px-4 py-5 shadow-[0_22px_60px_-48px_rgba(12,32,61,0.45)] dark:border-white/10 dark:bg-[#0d131c]/92 sm:px-8 sm:py-7">
        <style>{`
        .integration-line-base {
          stroke-dasharray: 800;
          stroke-dashoffset: 800;
          opacity: 0;
        }

        .integration-mounted .integration-line-base {
          animation: integrationDrawLine 1.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .integration-flow-line {
          stroke-dasharray: 3 9;
          opacity: 0;
          transition: opacity 0.4s ease 1.4s;
        }

        .integration-mounted .integration-flow-line {
          opacity: 0.45;
          animation: integrationFlowData 0.6s linear infinite;
        }

        .integration-node-container {
          transform: scale(0);
          opacity: 0;
          transform-origin: center;
        }

        .integration-mounted .integration-node-container {
          animation: 
            integrationPopIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards,
            pulseNode 3s ease-in-out 0.5s infinite;
        }

        .integration-center-hub {
          transform: scale(0);
          transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .integration-mounted .integration-center-hub {
          transform: scale(1);
          animation: pulseNode 3s ease-in-out 0.8s infinite;
        }

        @keyframes integrationDrawLine {
          0% { stroke-dashoffset: 800; opacity: 0; }
          30% { opacity: 1; }
          100% { stroke-dashoffset: 0; opacity: 1; }
        }

        @keyframes integrationFlowData {
          0% { stroke-dashoffset: 20; }
          100% { stroke-dashoffset: 0; }
        }

        @keyframes integrationPopIn {
          0% { transform: scale(0); opacity: 0; }
          70% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }

        @keyframes pulseNode {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(0.92); }
        }
      `}</style>

      <div className={`relative mt-2 w-full aspect-[4/3] flex items-center justify-center ${isMounted ? 'integration-mounted' : ''}`}>
        <svg viewBox="0 0 800 700" className="h-full w-full overflow-visible" preserveAspectRatio="xMidYMid meet">
          <defs>
            <filter id="integration-node-shadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="4" stdDeviation="10" floodOpacity="0.12" />
            </filter>
            <filter id="integration-center-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="30" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {integrationNodes.map((node, i) => {
            const path = getPathData(node);
            return (
              <g key={`path-${node.id}`}>
                <path
                  d={path}
                  fill="none"
                  stroke="rgba(148,163,184,0.4)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  className="integration-line-base"
                  style={{ animationDelay: `${i * 0.08}s` }}
                />
                <path
                  d={path}
                  fill="none"
                  stroke="rgba(148,163,184,0.75)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="integration-flow-line"
                />
              </g>
            );
          })}

          <g transform={`translate(${centerX}, ${centerY})`}>
            <g className="integration-center-hub" style={{ transformOrigin: '0px 0px' }}>
              <circle r="100" fill="white" filter="url(#integration-center-glow)" opacity="0.15" />
              <circle r="80" fill="white" className="dark:fill-[#1e293b]" filter="url(#integration-node-shadow)" />
              <foreignObject x="-80" y="-80" width="160" height="160">
                <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full border-[3px] border-white dark:border-[#1e293b]">
                  <img src="/logo2.png" alt="Light Mode Logo" className="h-full w-full object-cover dark:hidden bg-white" />
                  <img src="/logo1.png" alt="Dark Mode Logo" className="hidden h-full w-full object-cover dark:block bg-[#1e293b]" />
                </div>
              </foreignObject>
            </g>
          </g>

          {integrationNodes.map((node, i) => (
            <g key={node.id} transform={`translate(${node.x}, ${node.y})`}>
              <g
                className="integration-node-container cursor-pointer transition-transform duration-200 hover:scale-110"
                style={{ animationDelay: `${0.8 + i * 0.1}s`, transformOrigin: '0px 0px' }}
              >
                <circle r="64" fill={node.bg} filter="url(#integration-node-shadow)" />
                <foreignObject x="-40" y="-40" width="80" height="80">
                  <div className="flex h-full w-full items-center justify-center">{integrationIcons[node.id]}</div>
                </foreignObject>
              </g>
            </g>
          ))}
        </svg>
      </div>
    </div>
    </div>
  );
};

export const BentoGrid = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const lensRef = useRef<HTMLDivElement | null>(null);
  const magnifiedContentRef = useRef<HTMLDivElement | null>(null);

  const lensSize = 250;
  const scale = 1.33;

  const lensStyle = useMemo(
    () => ({
      width: lensSize,
      height: lensSize,
      boxShadow: '0 22px 60px -30px rgba(15,111,255,0.75), inset 0 0 0 1px rgba(255,255,255,0.65)',
      backgroundColor: 'var(--bg)'
    }),
    [lensSize]
  );

  useEffect(() => {
    let animationFrameId: number;
    let startTimestamp: number | null = null;
    const duration = 5000; // 5 seconds for a full up-and-down cycle

    const animateLens = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      
      const elapsed = timestamp - startTimestamp;
      const progress = (elapsed % duration) / duration;
      
      // A smooth sine wave for up and down movement (0 to 1 to 0)
      // Math.sin(progress * 2 * Math.PI) goes from 0 -> 1 -> 0 -> -1 -> 0
      // We want to map this to an interpolation between 0 and 1
      const wave = (Math.sin(progress * 2 * Math.PI) + 1) / 2;

      if (containerRef.current && lensRef.current && magnifiedContentRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        
        if (rect.width > 0 && rect.height > 0) {
          // Keep X fixed at roughly the middle-right (e.g., 60% of width)
          const x = rect.width * 0.6;
          
          // Y moves from 20% to 80% of height
          const yMin = rect.height * 0.2;
          const yMax = rect.height * 0.8;
          const y = yMin + wave * (yMax - yMin);

          lensRef.current.style.left = `${x - lensSize / 2}px`;
          lensRef.current.style.top = `${y - lensSize / 2}px`;

          const contentX = lensSize / 2 - x * scale;
          const contentY = lensSize / 2 - y * scale;

          magnifiedContentRef.current.style.left = `${contentX}px`;
          magnifiedContentRef.current.style.top = `${contentY}px`;
        }
      }

      animationFrameId = requestAnimationFrame(animateLens);
    };

    animationFrameId = requestAnimationFrame(animateLens);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [lensSize, scale]);

  return (
    <section id="core" className="relative z-10 px-6 py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-10">
        <div className="w-full lg:w-1/3">
          <div className="max-w-5xl">
            <h2 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Subscription & Recurring Billing
            </h2>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-foreground/62 sm:text-xl sm:leading-[1.45]">
              Subscription plans your way: custom billing cycles, membership tiers, free trials, and more. We&apos;ll build
              and integrate these flows with your payment system so renewals run themselves and you never miss a
              payment.
            </p>
          </div>

          <div
            ref={containerRef}
            className="relative mt-12 select-none sm:mt-14"
          >
            <CardContent />

            <div
              ref={lensRef}
              className="pointer-events-none absolute left-[18%] top-[76%] hidden -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border border-border/90 opacity-100 transition-opacity duration-200 lg:block"
              style={lensStyle}
            >
              <div
                ref={magnifiedContentRef}
                className="absolute left-0 top-0 w-full origin-top-left"
                style={{ transform: `scale(${scale})` }}
              >
                <CardContent />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/3">
          <IntegrationsAutomationCard />
        </div>
        </div>
      </div>
    </section>
  );
};