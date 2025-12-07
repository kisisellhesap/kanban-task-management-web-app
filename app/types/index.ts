/**
 * Her bir alt görevi (checklist item) temsil eden arayüz.
 */
export interface Subtask {
  /** Alt görevin başlığı/açıklaması. */
  name: string;
  id: string;
  /** Alt görevin tamamlanıp tamamlanmadığı. */
  isCompleted: boolean;
  color: string;
}

/**
 * Tahtadaki her bir ana görevi/kartı (Task) temsil eden arayüz.
 */
export interface Task {
  /** Görevin başlığı. */
  name: string;
  /** Görevin detaylı açıklaması (boş olabilir). */
  description: string;
  /** Görevin ait olduğu sütunun adı (Örn: "Todo", "Doing", "Done"). */
  status: string;
  /** Göreve ait alt görevlerin (checklist) listesi. */
  subtasks: Subtask[];
}

/**
 * Tahtadaki her bir sütunu/listeyi (Column) temsil eden arayüz.
 */
export interface Column {
  /** Sütunun adı (Örn: "Todo", "Doing", "Done"). */
  id: string;
  name: string;
  /** Sütun içindeki görevlerin listesi. */
  tasks: Task[];
  color: string;
}

/**
 * Tüm Kanban Tahtasını (Board) temsil eden en üst düzey arayüz.
 */
export interface Board {
  name: string;
  columns: Column[];
}

export interface BoardWithId {
  id: string;
  name: string;
  columns: Column[];
}

// JSON veriniz bu Board tipine uygun olacaktır:
// const kanbanData: Board = { ... }
