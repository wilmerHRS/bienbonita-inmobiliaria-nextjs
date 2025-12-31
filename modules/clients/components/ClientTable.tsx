'use client';

import { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import { getAllClientAction } from '@/data/actions/get-all-client.action';
import { IClientResponse } from '@/data/interfaces/client.interface';

export function ClientTable() {
  const [clients, setClients] = useState<IClientResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const pageSize = 10;

  useEffect(() => {
    let isMounted = true;

    const fetchClients = async () => {
      try {
        setLoading(true);
        const { data, count } = await getAllClientAction(currentPage, pageSize);
        if (isMounted) {
          setClients(data);
          setTotalCount(count);
        }
      } catch (error) {
        console.error('Error fetching clients:', error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchClients();

    return () => {
      isMounted = false;
    };
  }, [currentPage, pageSize]);

  const totalPages = Math.ceil(totalCount / pageSize);

  return (
    <div className="space-y-4">
      <div className="rounded-md border">
        <Table className="bg-white">
          <TableHeader>
            <TableRow className="bg-red-50 text-red-600 hover:bg-red-50 ">
              <TableHead className="text-red-600">Nombre</TableHead>
              <TableHead className="text-red-600">Documento</TableHead>
              <TableHead className="text-red-600">Teléfono</TableHead>
              <TableHead className="text-red-600">Proyecto</TableHead>
              <TableHead className="text-red-600">Fecha Reg.</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={4} className="h-24 text-center">
                  <Loader2 className="w-6 h-6 animate-spin mx-auto" />
                </TableCell>
              </TableRow>
            ) : clients.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} className="h-24 text-center">
                  No se encontraron clientes.
                </TableCell>
              </TableRow>
            ) : (
              clients.map((client) => (
                <TableRow key={client.id}>
                  <TableCell className="font-medium">
                    {client.fullname}
                  </TableCell>
                  <TableCell>{client.document}</TableCell>
                  <TableCell>{client.phone}</TableCell>
                  <TableCell>{client.project.name}</TableCell>
                  <TableCell>
                    {client.created_at
                      ? new Date(client.created_at).toLocaleDateString()
                      : '-'}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* Controles de Paginación */}
      <div className="flex items-center justify-between px-2">
        <p className="text-sm text-muted-foreground">
          Total: <span className="font-semibold">{totalCount}</span> clientes
        </p>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1 || loading}
          >
            <ChevronLeft className="h-4 w-4 mr-1" /> Anterior
          </Button>
          <div className="text-sm font-medium">
            Página {currentPage} de {totalPages || 1}
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages || loading}
          >
            Siguiente <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </div>
    </div>
  );
}
