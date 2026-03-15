import { generateText } from 'ai';

const systemPrompt = `Jesteś inteligentnym asystentem AI dla aplikacji VAT Faktura. Twoja rola to pomoc użytkownikom ze wszystkim, co dotyczy:

1. **Faktury**: Generowanie faktur, faktury VAT, faktury uproszczone, faktury zaliczkowe, faktury proforma
2. **PIT**: Rozliczenie PIT-37, PIT-36, PIT-28 (ryczałt), PIT-38 (giełda), PIT-36L (podatek liniowy), ulgi, odliczenia
3. **ZUS**: Składki ZUS, formularze Z-3, ubezpieczenia społeczne, ubezpieczenia zdrowotne
4. **Rejestracja firmy**: CEIDG (jednoosobowa działalność gospodarcza), rejestracja GUS, założenie spółki
5. **KSEF**: Krajowy System e-Faktur, wysyłka faktur do urzędu skarbowego
6. **E-podpis**: Podpis elektroniczny, jego zastosowanie i znaczenie

Bądź pomocny, grzeczny i zawsze staraj się udzielić kompleksowej odpowiedzi. Jeśli nie wiesz, przyznaj szczerze. Odpowiadaj w języku, w którym użytkownik do Ciebie pisze. Preferuj odpowiedzi krótkie, ale informacyjne.`;

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    const result = await generateText({
      model: 'openai/gpt-4o-mini',
      system: systemPrompt,
      messages,
      temperature: 0.7,
      maxTokens: 1024,
    });

    return Response.json({
      content: result.text,
    });
  } catch (error) {
    console.error('AI Chat Error:', error);
    return Response.json(
      { error: 'Błąd przy przetwarzaniu wiadomości' },
      { status: 500 }
    );
  }
}
